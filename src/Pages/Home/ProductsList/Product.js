import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {picture,name,price}=product;
    const navigate = useNavigate();
    const handleDetail=project=>{
        navigate('/details',{state:product});
     }
    return (
        <div class="border  overflow-hidden bg-white rounded-lg shadow-lg">
    <div class="px-4 py-2">
        <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
       
    </div>

    <div className='flex justify-center'>
    <img class="object-cover w-60 h-72 p-5  mt-2" src={picture} alt="NIKE AIR"/>
    </div>

    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-lg font-bold text-white">{price}</h1>
        <button onClick={handleDetail} class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Show Detail</button>
    </div>
</div>
    );
};

export default Product;