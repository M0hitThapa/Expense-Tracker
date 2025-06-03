import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
      
       
        <div className='flex flex-col justify-center items-center'>
{children}
    </div>
    </div>
  )
}

export default AuthLayout