import { useState } from "react";

const API_BASE = "http://localhost:5000";

export default function Profile() {
    return (
        <div className="container">
            <div className="profile-card">
                <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="avatar"
                    className="avatar"
                />
                <h2>Alice</h2>
                <p className="muted">@alice</p>

                <div className="actions">
                    <button>Explore Friends (BFS)</button>
                    <button className="secondary">Deep Explore (DFS)</button>
                </div>
            </div>
        </div>
    );
}

