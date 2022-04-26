import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContex } from '../context/StateContext';

const Navbar = () => {

   const { showCart, setShowCart, totalQuantities } = useStateContex();

   return (
      <div className="flex justify-between relative m-3">
         <p className="text-zinc-400">
            <Link href="/">
               JSM Headphones
            </Link>
         </p>

         <button type="button" className=" transition ease-in-out duration-150 transform hover:scale-110" onClick={() => setShowCart(true)}>
            <AiOutlineShopping className="relative text-2xl text-zinc-500 cursor-pointer bg-transparent"/>
            <span className="absolute left-3 bottom-2 bg-red-500 text-xs text-white rounded-full w-4 h-4 text-center">{totalQuantities}</span>
         </button>

         {showCart && <Cart />}
      </div>
   )
}

export default Navbar