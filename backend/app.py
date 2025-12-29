from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)

DB_PATH = "graph.db"

def get_db():
    return sqlite3.connect(DB_PATH)

def build_graph():
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT from_user, to_user FROM friendships")
    rows = cursor.fetchall()

    graph = {}

    for from_user, to_user in rows:
        if from_user not in graph:
            graph[from_user] = []
        if to_user not in graph:
            graph[to_user] = []

        graph[from_user].append(to_user)
        graph[to_user].append(from_user)  # friendship goes both ways

    conn.close()
    return graph

def bfs(start):
    graph = build_graph()

    visited = set()
    queue = [start]
    order = []

    while queue:
        current = queue.pop(0)  # take from front (FIFO)

        if current not in visited:
            visited.add(current)
            order.append(current)

            for neighbor in graph.get(current, []):
                if neighbor not in visited:
                    queue.append(neighbor)

    return order

def dfs(start):
    graph = build_graph()

    visited = set()
    stack = [start]
    order = []

    while stack:
        current = stack.pop()  # take LAST item (LIFO)

        if current not in visited:
            visited.add(current)
            order.append(current)

            for neighbor in graph.get(current, []):
                if neighbor not in visited:
                    stack.append(neighbor)

    return order

@app.route("/dfs")
def dfs_route():
    start = request.args.get("start", type=int)

    if start is None:
        return {"error": "start parameter required"}, 400

    result = dfs(start)
    return jsonify(result)


@app.route("/bfs")
def bfs_route():
    start = request.args.get("start", type=int)

    if start is None:
        return {"error": "start parameter required"}, 400

    result = bfs(start)
    return jsonify(result)

@app.route("/")
def home():
    return {"message": "Social Graph API running"}

@app.route("/users")
def get_users():
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT id, username FROM users")
    rows = cursor.fetchall()

    users = [{"id": r[0], "username": r[1]} for r in rows]

    conn.close()
    return jsonify(users)

@app.route("/friendships")
def get_friendships():
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT from_user, to_user FROM friendships")
    rows = cursor.fetchall()

    edges = [{"from": r[0], "to": r[1]} for r in rows]

    conn.close()
    return jsonify(edges)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5002))
    app.run(host="0.0.0.0", port=port)