import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, NavbarToggler, NavbarBrand,Navbar as RSNav } from 'reactstrap';

class Navbar extends Component {
    constructor(props) {
        super(props);

        //this.state = { isAdmin: false };
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);

        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        }); 
    }

    closeNavbar(){
        this.setState({
            collapsed: true,
        }); 
    }


    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top py-4">
                    <div className="container">
                        <NavbarBrand href="/" id="home">
                            <i id="navbarIcon" className="fas fa-shuttle-van" />
                            <h3 className="d-inline align-bottom pl-2 text-light">MusicMuse Touring</h3>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav ml-auto text-dark">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active nav-link"
                                        exact
                                        to="/"
                                        onClick={this.closeNavbar}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active nav-link"
                                        to="/news"
                                        onClick={this.closeNavbar}
                                    >
                                        News
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active nav-link"
                                        to="/bands"
                                        onClick={this.closeNavbar}
                                    >
                                        Bands
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active nav-link"
                                        to="/concerts"
                                        onClick={this.closeNavbar}
                                    >
                                        Concerts
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active nav-link"
                                        to="/about"
                                        onClick={this.closeNavbar}
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active nav-link"
                                        to="/contact"
                                        onClick={this.closeNavbar}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </Collapse>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
