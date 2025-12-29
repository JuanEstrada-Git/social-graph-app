export default function Home() {
    return (
        <div className="container">
            <h1>Welcome back 👋</h1>
            <p className="muted">
                Explore how social platforms discover connections using graph algorithms.
            </p>

            <div className="feed">
                <div className="card">Alice connected with Bob</div>
                <div className="card">Bob connected with Carol</div>
                <div className="card">Carol liked Dave’s post</div>
            </div>
        </div>
    );
}