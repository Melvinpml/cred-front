import React, { useEffect, useState } from 'react'
import CredNavBar from './CredNavBar'
import axios from 'axios'
import AdminNav from './AdminNav'

const ViewUser = () => {

    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:3001/api/user/view").then(
            (response) => {
                setData(response.data)
            }
        )
    }
    useEffect(() => { getData() }, [])

    

  return (
    <div>
        <AdminNav />
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <table class="table table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Email id</th>
                                            <th scope="col">Mobile</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.firstName}</th>
                                                        <td>{value.lastName}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.mobile}</td>
                                                        
                                                    </tr>
                                                }
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewUser