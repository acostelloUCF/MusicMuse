import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = { isAdmin: true };
    }

    renderAdminTab() {
        return (
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active nav-link" exact to="/admin/dashboard">
                    Admin
                </NavLink>
            </li>
        );
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top py-4">
                    <div className="container">
                        <a id="home" className="navbar-brand">
                            <i id="navbarIcon" className="fas fa-shuttle-van" />
                            <h3 className="d-inline align-bottom pl-2 text-light">MusicMuse Touring</h3>
                        </a>
                        <button data-toggle="collapse" data-target="#navbarCollapse" className="navbar-toggler">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto text-dark">
                                {this.state.isAdmin? this.renderAdminTab() : ''}
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active nav-link" exact to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active nav-link" to="/news">
                                        News
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active nav-link" to="/bands">
                                        Bands
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active nav-link" to="/concerts">
                                        Concerts
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
