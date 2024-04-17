import React from 'react'
import { NavbarBrand } from 'react-bootstrap'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import AdminNav from './AdminNav'

const AdminHome = () => {
    return (
        <div>
            <AdminNav/>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img height="674px" src="https://wallpapercave.com/wp/wp6871290.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <NavbarBrand href="/">
                                <Logo className="d-inline-block align-top" />
                                CRED
                            </NavbarBrand>
                            <h1><b>CRED-X</b></h1>
                            <p>Make you payment easy with us</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img height="674px" src="https://wallpapercave.com/wp/wp6871396.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <NavbarBrand href="/">
                                <Logo className="d-inline-block align-top" />
                                CRED
                            </NavbarBrand>
                            <h1><b>CRED-X</b></h1>
                            <p>Make you payment easy with us</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img height="674px" src="https://wallpapercave.com/wp/wp6871362.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <NavbarBrand href="/">
                                <Logo className="d-inline-block align-top" />
                                CRED
                            </NavbarBrand>
                            <h1><b>CRED-X</b></h1>
                            <p>Make you payment easy with us</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default AdminHome