import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axios from 'axios'

const ViewAllCards = () => {

    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/card/viewcard").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])

    return (
        <div>
            <AdminNav />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Card Name</th>
                                    <th scope="col">Card No</th>
                                    <th scope="col">Expiry Date</th>
                                    <th scope="col">Card Owner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.cardName}</th>
                                                <td>{value.cardNo}</td>
                                                <td>{value.expiryDate}</td>
                                                <td>{value.userName}</td>

                                            </tr>

                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllCards