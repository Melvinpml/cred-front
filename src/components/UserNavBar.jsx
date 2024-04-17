import React from 'react'
import { NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/images/logo.svg'

const UserNavBar = () => {
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

                                <Link class="nav-link active" aria-current="page" to="/userhome">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/addcard">Add Card</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Approval Check</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Log Out</Link>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default UserNavBar