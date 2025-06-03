import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/input'
import { validateEmail } from '../../utils/helper'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()


const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
    }

    if(!password) {
        setError("please enter the password");
        return;
    }

    setError("")



}


  return (
   <div className='flex justify-center items-center h-screen'>
    <AuthLayout>
<h3 className='text-xl font-semibold text-black/80'>Welcome Back</h3>
<p className='text-sm text-black/50 mt-2 mb-5'>Please enter your details to login</p>

<form onSubmit={handleLogin}>
    <Input type='text'
     value={email}
      placeholder='hello123@gmail.com'
       label="Email Address"
        onChange={(e) => setEmail(e.target.value)} />

         <Input type='password'
     value={password}
      placeholder='Enter your password'
       label="Password"
        onChange={(e) => setPassword(e.target.value)} />


{error && <p className='text-red-400 text-xs pb-2.5'>{error}</p>}
<button type='submit' className='btn-primary'>Login</button>
<p className='text-[13px] text-slate-800 mt-3 px-24'>
    Don't have an account?{" "}
    <Link className='font-medium text-primary underline' to="/signup">
    SignUp</Link>
</p>

</form>
    </AuthLayout>

   </div>
  )
}

export default Login