import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data, changeData] = useState(
        {
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": ""
        }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")

                } else {
                    alert("Error")

                }
            }

        ).catch()
    }
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">FIRSTNAME</label>
                                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">LASTNAME</label>
                                    <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">COLLEGE</label>
                                    <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">DOB</label>
                                    <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">EMAIL</label>
                                    <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">ADDRESS</label>
                                    <input type="textbox" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">COURSE</label>
                                    <select name="course" value={data.course} onChange={inputHandler} id="" className="form-control">
                                        <option value="mca">MCA</option>
                                        <option value="bca">BCA</option>
                                        <option value="bba">BBA</option>
                                        <option value="mba">MBA</option>
                                    </select>


                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">MOBILENUMBER</label>
                                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default AddStudent