import React, { useState } from 'react'
import CredNavBar from './CredNavBar'
import { Link, useNavigate } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap';
import "../styles/login.css"
import axios from 'axios';

const Login = () => {

    const [input, setInput] = new useState(
        {
            email: "",
            password: ""
        }
    )
    const navig = useNavigate()
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        axios.post("http://localhost:3001/api/user/signin", input).then(
            (response) => {
                if (response.data.status == "success") {
                    console.log("response.data")
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid", response.data.userdata._id)
                    navig("/userhome")
                } else if (response.data.status == "incorrect password") {
                    alert("Incorrect Password")
                    setInput(
                        {
                            "email": "",
                            "password": ""
                        }
                    )
                }
                else {
                    alert("No user Found")
                }
            }
        )
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
                                <div className="card mb-3">
                                    <div className="card-body">
                                        
                                            <h1 className="login-form-heading">User Login</h1>
                                            <div className="form-group text-start">
                                                <br />
                                                <label htmlFor="" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    name='email'
                                                    value={input.email}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                            <div className="form-group text-start">
                                                <label htmlFor="" className="form-label">Password</label>
                                                <br />
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    name='password'
                                                    value={input.password}
                                                    onChange={inputHandler}
                                                />
                                            </div>
                                            <br />
                                            <button className="btn btn-info" onClick={readValues}>Login</button>
                                            {<ProgressBar className="progressbar" animated now={100} />}
                                            {<span className="row d-flex justify-content-center error-message"></span>}
                                        
                                        <Link to="/adminlogin">Admin Login</Link>
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