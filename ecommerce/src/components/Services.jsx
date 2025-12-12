import React from 'react'

const Services = () => {
  return (
    <>
    <div>
        <h4 className="mt-9 text-2xl text-center font-bold">Our Services</h4>
    </div>
    <div className='grid grid-cols-2 gap-4 p-4 m-5'>
        <div className='bg-red-100 border-2 p-3 rounded-md shadow-md hover:shadow-xl hover:scale-125 duration-1000'>
            <h5 className='font-semibold text-lg'>Free Shipping</h5>
            <p className='mt-3 text-sm'>We offer free shipping on all orders over $50.</p>
        </div>
        <div className='bg-red-100 border-2 p-3 rounded-md shadow-md hover:shadow-xl hover:scale-125 duration-1000'>
            <h5 className='font-semibold text-lg'>Free Shipping</h5>
            <p className='mt-3 text-sm'>We offer free shipping on all orders over $50.</p>
        </div>
        <div className='bg-red-100 border-2 p-3 rounded-md shadow-md hover:shadow-xl hover:scale-125 duration-1000'>
            <h5 className='font-semibold text-lg'>Free Shipping</h5>
            <p className='mt-3 text-sm'>We offer free shipping on all orders over $50.</p>
        </div>
        <div className='bg-red-100 border-2 p-3 rounded-md shadow-md hover:shadow-xl hover:scale-125 duration-1000'>
            <h5 className='font-semibold text-lg'>Free Shipping</h5>
            <p className='mt-3 text-sm'>We offer free shipping on all orders over $50.</p>
        </div>
    </div>
    </>
  )
}

export default Services