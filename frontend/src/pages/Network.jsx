import { useState } from "react";

export default function Network() {
    const [result, setResult] = useState([]);

    const runBFS = async () => {
        const res = await fetch("http://localhost:5000/bfs?start=alice");
        const data = await res.json();
        setResult(data.order);
    };

    const runDFS = async () => {
        const res = await fetch("http://localhost:5000/dfs?start=alice");
        const data = await res.json();
        setResult(data.order);
    };

    return (
        <div className="container">
            <h1>Network Explorer</h1>

            <div className="actions">
                <button onClick={runBFS}>Explore Nearby (BFS)</button>
                <button className="secondary" onClick={runDFS}>
                    Deep Dive (DFS)
                </button>
            </div>

            <div className="results">
                {result.map((name, i) => (
                    <div key={i} className="card">
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );
}