import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UpdateSuccess = () => {
  const navigate = useNavigate();
  const clickHandler = () => {  
     navigate("/");
  }
  
  return (
    <div className='flex-col '>
      <div className='text-center text-white mt-10 text-2xl'>
        Your Form Updated Successfully !!!!
      </div>
      <div className='flex justify-center items-center'>
        <div onClick={clickHandler} className='text-white bg-zinc-400 text-lg p-2 mt-3 cursor-pointer'>Go To User Page !!!</div>
      </div>
    </div>
  )
}
