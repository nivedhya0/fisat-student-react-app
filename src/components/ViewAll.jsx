import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const ViewAll = () => {
        const [stud, changeStud] = useState([])
        
        const fetchData = ()=>{
            axios.get("https://courseapplogix.onrender.com/getdata").then(
                (response)=>{changeStud(response.data)

                }
            ).catch()
        }
        
useEffect(()=>{fetchData()},[])
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">FirstName</th>
                                        <th scope="col">LastName</th>
                                        <th scope="col">DOB</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stud.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value._id}</th>
                                                    <td>{value.firstname}</td>
                                                    <td>{value.lastname}</td>
                                                    <td>{value.dob}</td>
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
        )
    }

    export default ViewAll