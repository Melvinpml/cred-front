import React from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminNav = () => {
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

                                <Link class="nav-link active" aria-current="page" to="/adminhome">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/viewuser">View User</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/viewcards">View Card</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/adminlogin">Log Out</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav