import React from 'react'
import { Link } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap';
import "../styles/login.css"
import CredNavBar from './CredNavBar';

const AddCard = () => {
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

                                            <form className="form">
                                                <h1 className="login-form-heading"><b>Add a card</b></h1>
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Credit Card Name</label><br />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="credit card isuued authority"

                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Card Number</label><br />
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter card number"

                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">CVV</label><br />
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter CVV"

                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Expiry Date</label><br />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter expiry(MM/YYYY)"

                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Name</label><br />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter name on the card"

                                                    />

                                                </div><br />
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block"

                                                >
                                                    Add Card
                                                </button>

                                                <ProgressBar className="progressbar" animated now={100} />

                                            </form>


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

export default AddCard