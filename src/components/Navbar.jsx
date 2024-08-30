import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <a className="navbar-brand" href="/">Job Seeker's</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"href="/" >About us</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/signup" >Sign up</a>
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
