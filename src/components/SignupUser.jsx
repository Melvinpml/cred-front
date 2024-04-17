import React, { useState } from 'react'
import CredNavBar from './CredNavBar'
import { Link } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap';
import "../styles/login.css"
import axios from 'axios';

const SignupUser = () => {
    const [input, setInput] = new useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            password: ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        axios.post("http://localhost:3001/api/user/signup", input).then(
            (response) => {
                if (response.data.status == "success") {

                    alert("success")

                    setInput({
                        firstName: "",
                        lastName: "",
                        email: "",
                        mobile: "",
                        password: ""
                    })

                } else {

                    if (response.data.status == "incorrect password") {
                        alert("Failed")

                        setInput(
                            {
                                firstName: "",
                                lastName: "",
                                email: "",
                                mobile: "",
                                password: ""
                            }
                        )
                    }

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
                                <center>
                                    <div class="card mb-3">
                                        <div class="card-body">



                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <h1>SignUp</h1>
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                                                <label htmlFor="" className="form-label text-start">First Name</label>
                                                <input type="text" className="form-control" name='firstName' value={input.firstName} onChange={inputHandler} />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                                                <label htmlFor="" className="form-label text-start">Last Name</label>
                                                <input type="text" className="form-control" name='lastName' value={input.lastName} onChange={inputHandler} />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                                                <label htmlFor="" className="form-label text-start">Email</label>
                                                <input type="email" name="email" id="" className="form-control" value={input.email} onChange={inputHandler} />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                                                <label htmlFor="" className="form-label text-start">Mobile</label>
                                                <input type="text" className="form-control" name='mobile' value={input.mobile} onChange={inputHandler} />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start">
                                                <label htmlFor="" className="form-label text-start" >Password</label>
                                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                                            </div>
                                            <br />
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                                <button className="btn btn-info" onClick={readValues}>Submit</button>
                                            </div>


                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default SignupUser