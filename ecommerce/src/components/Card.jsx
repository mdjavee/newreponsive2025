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
        <h4 className="text-2xl text-center font-bold">Products</h4>
        <div className="grid grid-cols-2 gap-5 p-5 mx-auto bg-amber-50 mt-6 rounded-md shadow">
            {product.map((item)=>(
                <div key={item.id} className='p-5 mt-9 shadow-md shadow-cyan-900  rounded-md border-4 '>
                    <img src={item.image} alt={item.title} className='w-[90%] mb-5  '/>
                    <h5 className='mb-5 font-bold overflow-auto line-clamp-2'>{item.title}</h5>
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