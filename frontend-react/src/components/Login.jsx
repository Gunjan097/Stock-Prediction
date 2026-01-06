import React, { useContext, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async  (e) => {
    e.preventDefault();
    const userData = { username, password };
    console.log(userData)
    try{  
      setLoading(true)
      const response = await axios.post('http://localhost:8000/api/v1/token/', userData)
      console.log("Login successful:", response)
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      setSuccess(true)
      setIsLoggedIn(true);
      navigate('/');
      setError('')
    }
    catch(error){
      console.log("Login error:", error.response.data)
      setError(error.response.data)
      setSuccess(false)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-6 p-5">
        <div className="col-md-6 p-5 bg-light-dark rounded">
        <h2 className='text-center '>Login Page</h2>
        <div className="m-3"></div>
        <form onSubmit={handleSubmit}>
          <input className='form-control' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <div className="m-3"></div>
          <input className='form-control' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <small> {error.password && <div className=' text-danger text-center'>{error.password}</div>} </small> 
          <small> {error.detail && <div className=' text-danger text-center'>{error.detail}</div>} </small> 
        <div className="m-3"></div>
        { success && <div className='alert alert-success text-center'>Login successful!</div>}
            { loading ? <div className='text-center'><FontAwesomeIcon icon={faSpinner} spin/> Please wait</div> : <button className="btn btn-info d-block mx-auto " type="submit">Login</button>}
                 </form>
        </div>
       </div>
      </div>
    </>
  )
}

export default Login
