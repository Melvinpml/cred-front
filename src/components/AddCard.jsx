import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap';
import "../styles/login.css"
import CredNavBar from './CredNavBar';
import axios from 'axios';
import UserNavBar from './UserNavBar';

const AddCard = () => {

    const [input, setInput] = new useState(
        {
            cardName: "",
            cardNo: "",
            cvv: "",
            expiryDate: "",
            userName: ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        axios.post("http://localhost:3001/api/card/addcard", input).then(
            (response) => {
                if (response.data.status == "success") {

                    alert("success")

                    setInput({
                        cardName: "",
                        cardNo: "",
                        cvv: "",
                        expiryDate: "",
                        userName: ""
                    })

                }
            }
        )
    }

    return (
        <div>
            <UserNavBar/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <div className="card mb-3">
                                        <div className="card-body">

                                            
                                                <h1 className="login-form-heading"><b>Add a card</b></h1>
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Credit Card Name</label><br />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="credit card isuued authority"
                                                        value={input.cardName}
                                                        name='cardName'
                                                        onChange={inputHandler}
                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Card Number</label><br />
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter card number"
                                                        value={input.cardNo}
                                                        name='cardNo'
                                                        onChange={inputHandler}
                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">CVV</label><br />
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter CVV"
                                                        value={input.cvv}
                                                        name='cvv'
                                                        onChange={inputHandler}
                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Expiry Date</label><br />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter expiry(MM/YYYY)"
                                                        value={input.expiryDate}
                                                        name='expiryDate'
                                                        onChange={inputHandler}
                                                    />

                                                </div><br />
                                                <div className="form-group text-start">
                                                    <label htmlFor="" className="form-label">Name</label><br />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter name on the card"
                                                        value={input.userName}
                                                        name='userName'
                                                        onChange={inputHandler}
                                                    />

                                                </div><br />
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block"
                                                    onClick={readValues}

                                                >
                                                    Add Card
                                                </button>

                                                <ProgressBar className="progressbar" animated now={100} />

                                            


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