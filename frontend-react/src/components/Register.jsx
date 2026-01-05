import React , { useState }  from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleRegistration = async (e) => {
    e.preventDefault()
    const userData={
      username, email, password
    }
    
    console.log(userData)
    
    try{
      setLoading(true)
      const response = await axios.post('http://localhost:8000/api/v1/register/', userData)
      console.log("Registration successful:", response.data)
      setSuccess(true)
      setError('')
    }
    catch(error){
      setError(error.response.data)
      setSuccess(false)
      console.log("Registration error:", error.response.data)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center p-5 ">
          <div className="col-md-6 p-5 bg-light-dark rounded">

          <h3 className='text-center'>Create an Account</h3>
          <div className="m-3"></div>
          <form action="" onSubmit={ handleRegistration}>
            <input type="text" className='form-control' value={username}  placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <small> {error.username && <div className='text-danger'>{error.username[0]}</div>}</small>
            <div className="m-3"></div>
            <input type="email" className='form-control' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <small> {error.email && <div className='text-danger'>{error.email}</div>}</small>
            <div className="m-3"></div>
            <input type="password" className='form-control' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <small> {error.password && <div className='text-danger'>{error.password[0]}</div>}</small>
            <div className="m-3"></div>
            { success && <div className='alert alert-success text-center'>Registration successful!</div>}
            { loading ? <div className='text-center'><FontAwesomeIcon icon={faSpinner} spin/> Please wait</div> : <button className="btn btn-info d-block mx-auto " type="submit">Register</button>}
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
