import React, { useState } from 'react'
import CredNavBar from './CredNavBar'
import { Link, useNavigate } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap';
import "../styles/login.css"

const Login = () => {

    const navigate = useNavigate()
    const [input, setInput] = new useState(
        {
            "username": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        if (input.username == "admin" && input.password == "admin") {
            navigate("/adminhome")

            setInput({
                "username": "",
                "password": ""
            })
        }
        else {
            alert("Invalid Username or Password")
            setInput(
                {
                    "username": "",
                    "password": ""
                }
            )
        }
    }


    return (
        <div>
            <CredNavBar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        
                                            <h1 className="login-form-heading">Admin Login</h1>
                                            <div className="form-group text-start">
                                                <br />
                                                <label htmlFor="" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    name="username" value={input.username} onChange={inputHandler}
                                                />
                                            </div>
                                            <div className="form-group text-start">
                                                <label htmlFor="" className="form-label">Password</label>
                                                <br />
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    name="password" value={input.password} onChange={inputHandler}
                                                />
                                            </div>
                                            <br />
                                            <button className="btn btn-info" onClick={readValues}>Login</button>
                                            {<ProgressBar className="progressbar" animated now={100} />}
                                            {<span className="row d-flex justify-content-center error-message"></span>}
                                        
                                        <Link to="/login">User Login</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login