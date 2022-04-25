import Link from "next/link";

const HeroBanner = () => {
   return (
      <div className="py-28 px-10 bg-zinc-300 rounded-2xl relative h-[500px] leading-3 w-full">
         <div>
            <p className="text-lg">SMALL TEXT</p>
            <h3 className="text-6xl font-bold">MID TEXT</h3>
            <img src="" alt="headphones"  className="absolute top-0 right-20 w-[450px] h-[450px]"/>

            <div>
               <Link href='/product/id'>
                  <button 
                     type="button" 
                     className="text-sm cursor-pointer font-semibold mt-9 rounded-xl px-2 py-2 bg-red-500 border-none text-white"
                  >BUTTON TEXT</button>
               </Link>

               <div className="absolute right-16 bottom-5 w-80 leading-4 flex flex-col text-[#324d67]">
                  <h5 className="mb-3 font-bold text-base self-end">Description</h5>
                  <p className="text-[#5f5f5f] text-right">DESCRIPTION</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroBanner;