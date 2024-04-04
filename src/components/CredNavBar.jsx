import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavbarBrand } from 'react-bootstrap';
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';


const CredNavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <NavbarBrand href="/">
                        <Logo className="d-inline-block align-top" />
                        CRED
                    </NavbarBrand>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">

                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">About</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CredNavBar