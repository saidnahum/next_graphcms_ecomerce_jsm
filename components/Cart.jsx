import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineRight, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContex } from '../context/StateContext';
import getStripe from '../lib/getStripe';

const Cart = () => {

   const cartRef = useRef();
   const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContex();

   const handleCheckout = async () => {
      const stripe = await getStripe();

      const response = await fetch('/api/stripe', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(cartItems),
      });

      if (response.statusCode === 500) return;

      const data = await response.json();

      toast.loading('Redirecting...');

      stripe.redirectToCheckout({ sessionId: data.id });
   }


   return (
      <div className="w-screen bg-[rgba(0,0,0,0.5)] fixed right-0 top-0 z-50" ref={cartRef}>
         <div className="h-screen w-[600px] bg-white float-right py-10 px-3">
            <button
               type="button"
               className="flex items-center text-lg font-bold cursor-pointer gap-1 ml-3 border-none bg-transparent"
               onClick={() => setShowCart(false)}
            >
               <AiOutlineRight />
               <span className='ml-3'>Your Cart</span>
               <span className='text-red-400'>({totalQuantities} items)</span>
            </button>

            {/* Empty Cart */}
            {cartItems.length < 1 && (
               <div className='flex flex-col items-center'>
                  <AiOutlineShopping size={150} className="m-6" />
                  <h3 className='font-bold'>Your Shopping Bag is Empty</h3>
                  <Link href="/">
                     <button
                        type="button"
                        onClick={() => setShowCart(false)}
                        className="bg-red-500 text-white font-bold mt-5 px-5 py-2 rounded-md transition ease-in-out duration-300 hover:scale-110"
                     >
                        Continue Shopping
                     </button>
                  </Link>
               </div>
            )}

            {/* Cart with items */}
            <div>
               {cartItems.length >= 1 && cartItems.map((item, i) => (
                  <div className='flex mt-10 w-full px-14' key={i}>
                     <img
                        src={item?.image[0].url}
                        alt="product image"
                        className='w-32 h-32 bg-zinc-200 rounded-md'
                     />

                     <div className='flex flex-col justify-between w-full p-5'>
                        <div className='flex justify-between'>
                           <h5 className='text-sky-900 text-xl font-bold'>{item.name}</h5>
                           <h4 className='text-sky-900 font-semibold'>${item.price}</h4>
                        </div>

                        <div className='flex justify-between'>
                           <div>
                              <p className='flex items-center'>
                                 <span className='border inline-flex items-center justify-center h-8 w-10 text-red-500 cursor-pointer hover:text-red-300' onClick={() => toggleCartItemQuanitity(item.id, 'dec')}>
                                    <AiOutlineMinus />
                                 </span>

                                 <span className='border inline-flex items-center justify-center h-8 w-10 font-bold'>
                                    {item.quantity}
                                 </span>

                                 <span className='border inline-flex items-center justify-center h-8 w-10 text-green-600 cursor-pointer hover:text-green-400' onClick={() => toggleCartItemQuanitity(item.id, 'inc')}>
                                    <AiOutlinePlus />
                                 </span>
                              </p>
                           </div>

                           <button type="button" className='text-red-500 text-xl' onClick={() => onRemove(item)}>
                              <TiDeleteOutline />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {cartItems.length >= 1 && (
               <div>
                  <div className='flex justify-between px-14 mt-10 font-bold'>
                     <h3>Subtotal:</h3>
                     <h3>${totalPrice}</h3>
                  </div>

                  <div className='flex justify-center mt-10'>
                     <button
                        type="button"
                        className="bg-red-500 text-white uppercase px-10 py-1 font-bold rounded-md transition ease-in-out duration-300 hover:scale-110"
                        onClick={handleCheckout}
                     >
                        Pay with Stripe
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Cart