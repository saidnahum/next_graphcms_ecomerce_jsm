import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContex } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {

   const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContex();

   useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      runFireworks();
   }, [])
   

   return (
      <div className='bg-white min-h-[60vh]'>
         <div className='w-full max-w-xl m-auto bg-zinc-300 flex flex-col items-center justify-center mt-40 p-14 rounded-md'>
            <p className='text-green-600 text-5xl'>
               <BsBagCheckFill/>
            </p>
            <h2 className='text-center mt-5 text-sky-900 text-3xl font-bold'>Thank you for your order!</h2>

            <p className='text-center'>Check your email inbox for the receipt.</p>

            <p className='mt-5 font-semibold text-center'>
               If you have any questions please email 
               <a href="mailto:order@example.com">
                  <span className='text-red-500'> order@example.com</span>
               </a>
            </p>
            <Link href='/'>
               <button type="button" width="300px" className='mt-5 bg-red-500 text-white px-10 py-2 rounded-md font-semibold transition ease-in-out duration-200 hover:scale-105'>
                  Continue Shoping
               </button>
            </Link>
         </div>
      </div>
   )
}

export default Success