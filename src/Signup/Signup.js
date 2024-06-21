import React,{useState} from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    //console.log(process.env.REACT_APP_BACKEND_URL)
    const navigate = useNavigate()
    const[name, setName]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[mobile, setMobile]=useState('')
    //const[gender, setGender]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        const newUser={name,password, email,mobile}//gender}
        console.log(newUser)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,newUser)
        .then((res)=>{
            console.log(res)
            if(res.status===201)
                navigate('/login')
        })
        .catch((error)=>{
            console.log(error)
        })

    }

  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Enter your Name:</label>
            <input value={name} 
            onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Enter your Email:</label>
            <input value={email} 
            onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Enter your Password:</label>
            <input value={password} 
            onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Enter Phone number:</label>
            <input value={mobile} 
            onChange={(e)=>setMobile(e.target.value)} required/>
        </div>
        {/* <div className='form-group'>
                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="other">Other</label>
            </div> */}
      
        <button>Signup</button>
      </form>
    </div>
  )
}
