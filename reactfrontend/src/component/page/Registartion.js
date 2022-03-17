import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { useRegEmpOrgMutation } from '../../serves/allinfoPost'

import { registerUser } from '../../reducers/authReducer'
import { useDispatch } from 'react-redux'

const Registartion = () => {

    const [empEmail, setEmpEmail] = useState()
    const [empPass, setEpmPass] = useState()
    const despatch = useDispatch()

    const regEmp = (e) => {
        e.preventDefault()
        despatch(registerUser({ empEmail, empPass }))
    }

    // const pushempRegistartionData = {
    //     empEmail: empInfo.empEmail,
    //     empPass : empInfo.empPass
    // }

    // const [ regEmp, resInfo ] = useRegEmpOrgMutation()
    // if (resInfo.isLoading) return <div>Loading.....</div>
    // if (resInfo.isError) return <div>Error Occured : {resInfo.error.error}</div>

    // style for Form.     // e.preventDefault()
    const FormConStyle = {
        height: "93vh",
        display: "flex",
        alignItem: "center",
        justifyContent: "center"
    }

    return (
        <>
            <div className="container" style={FormConStyle}>
                <div className="row align-items-center">
                    <div className="col-12">
                        <form className="border p-3 rounded">
                            <div className="form-group text-center">
                                <h2>Registartion</h2>
                                <hr></hr>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input name="empEmail" onChange={(e) => setEmpEmail(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jhone@gmail.com" required />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input name="empPass" onChange={(e) => setEpmPass(e)} type="password" className="form-control current-password" id="exampleInputPassword1" placeholder="******" required />
                            </div>

                            <button type="submit" onClick={(e) => regEmp(e)} className="btn w-100 btn-primary form-group">Submit</button>
                            <p className="form-group" >Already have an account? <NavLink to="/login"> Click Here </NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registartion