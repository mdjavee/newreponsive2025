import React, { useEffect, useState } from 'react'

const Card = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response=await fetch('https://fakestoreapi.com/products');
            const data=await response.json();
            setProduct(data);
        }
        fetchData();
    },[])
  return (
    <>
    <div>
        <h4 className="text-2xl text-center font-bold font-mono">Products</h4>
        <div className="grid grid-cols-2 gap-2 p-3 mx-auto  mt-6 rounded-md shadow">
            {product.map((item)=>(
                <div key={item.id} className='p-3 mt-9   rounded-md shadow-2xl  border-red-400 border-2 '>
                    <img src={item.image} alt={item.title} className='w-[90%] mb-5  '/>
                    <h5 className='mb-5 font-bold overflow-hidden line-clamp-2'>{item.title}</h5>
                    <p className='line-clamp-2 mb-5  font-light font-sans '>{item.description.substring(0,30)}...</p>
                    <p className='font-bold'>$ {item.price}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Card