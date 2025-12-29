import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <h2 className="logo">SocialGraph</h2>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/network">Network</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}
