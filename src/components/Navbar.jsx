import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <Link to="/" className="navbar-brand">Job Seeker's</Link>
                    </li>

                    <li className="nav-item">
                    <span  aria-current="page" ><Link to="/" className="nav-link active">Home</Link></span>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">About us</Link>

                    </li>
                    <li className="nav-item">
                    <Link to="/signup" className="nav-link ">Sign up</Link>
                    </li>
                </ul>
                <form>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </form>

            </div>
        </nav>
    )
}
export default Navbar;
