import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {  } from '../../reducers/authReducer'
import { useDispatch } from 'react-redux'

const Login = () => {

  const [empEmail, setEmpEmail] = useState()
  const [empPass, setEpmPass] = useState()
  const despatch = useDispatch()

  const logEmp = (e) => {
    e.preventDefault()
    despatch(({empEmail, empPass}))
  }


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
                <h2>Login</h2>
                <hr/>
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" name="empEmail" onChange={(e) => setEmpEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jhone@gmail.com" required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Create Password</label>
                <input type="password" name="empPass" onChange={(e) => setEpmPass(e)} className="form-control" id="exampleInputPassword1" placeholder="******" required />
              </div>

              <button type="submit" onClick={(e) => logEmp(e)} className="btn w-100 btn-primary mb-2">Submit</button>
              <p>New Here? <NavLink to="/registartion" >Register.</NavLink></p>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login