import React, { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import Product from './Product';

const ProductsList = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allProducts')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
      
            
            <div className='max-w-screen-xl mx-auto my-10'>
            <h1 className='text-4xl mb-5 font-bold text-center'>PRODUCTS</h1>
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                { products.length===0?<Loading></Loading>:
                    products.map(product=><Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
            
            
        
    );
};

export default ProductsList;