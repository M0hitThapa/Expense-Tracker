import React, {useState} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/input'
import { validateEmail } from '../../utils/helper'

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()


  const handleSignup = async() => {

  }
  return (
    <div className='flex justify-center items-center h-screen'>
    <AuthLayout>
<h3 className='text-xl font-semibold text-black/80'>Create an Account</h3>
<p className='text-sm text-black/50 mt-2 mb-5'>Join us today by entering your details below</p>

<form onSubmit={handleSignup}>
  <Input
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  label="Full Name"
  placeholder="John"
  type="text"
  />
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
<button type='submit' className='btn-primary'>Signup</button>
<p className='text-[13px] text-slate-800 mt-3 px-24'>
    Already have an account?{" "}
    <Link className='font-medium text-primary underline' to="/login">
    Login</Link>
</p>

</form>
    </AuthLayout>

   </div>
  )
}

export default SignUp