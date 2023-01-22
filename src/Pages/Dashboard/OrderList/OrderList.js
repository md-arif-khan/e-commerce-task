import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import OrderRow from './OrderRow';

const OrderList = () => {
    const [orderList,setOrderList]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orderList')
        .then(res=>res.json())
        .then(data=>setOrderList(data))
    },[])
    const handleUserDelete=id=>{
        const proceed=window.confirm("Are you sure, you want to cancel this order")
        if(proceed){
          fetch(`http://localhost:5000/orders/${id}`,{
           method:"DELETE"
 
          })
          .then(res=>res.json())
          .then(data=>{
           if(data.deletedCount>0){
             toast.success('Delete Successfully')
             const remaing=orderList.filter(odr=>odr._id!==id)
             setOrderList(remaing)
           }
           console.log(data)
          })
        }
    }
    return (
        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            {
                orderList.map(order=><OrderRow handleUserDelete={handleUserDelete} key={order._id} order={order}></OrderRow>)
            }
          
        </tbody>
    </table>
</div>

    );
};

export default OrderList;