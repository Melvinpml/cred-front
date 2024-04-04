import React from 'react'
import CredNavBar from './CredNavBar'

const Login = () => {
    return (
        <div>
            <CredNavBar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row h-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-3">
                                    <img height="400" src='https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg' class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h1 class="card-title"><b>Login</b></h1>
                                            <input type="text" className="form-control" placeholder='Enter email id' /><br />
                                            <input type="password" className="form-control" placeholder='Enter your password' /><br />
                                            <button className="btn btn-success">Login</button>
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