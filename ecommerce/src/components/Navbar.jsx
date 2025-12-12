import React from 'react'

const Navbar = () => {
  return (
    <div className='p-5 shadow-md flex  items-center bg-amber-100 justify-around'>
        <h1 className="text-2xl font-extrabold font-sans ">SelfFashioner</h1>
        <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-blue-600'>Login</button>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-green-600'>Sign Up</button>
            </div>

        </div>
  )
}

export default Navbar