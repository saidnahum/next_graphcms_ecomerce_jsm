import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {

   //console.log(heroBanner);

   return (
      <div className="py-28 px-10 bg-zinc-300 rounded-2xl relative h-[500px] leading-3 w-full" key={heroBanner.id}>
         <div>
            <p className="text-lg">{heroBanner.smallText}</p>
            <h3 className=" text-lg md:text-6xl font-bold">{heroBanner.midText}</h3>
            <h1 className="text-white text-2xl md:text-9xl font-bold">{heroBanner.largeText1}</h1>
            <img src={heroBanner.image.url} alt="headphones"  className="absolute top-32 right-0 lg:top-0 lg:right-20 w-60 h-60  md:w-[450px] md:h-[450px]"/>

            <div>
               <Link href={`/product/${heroBanner.product}`}>
                  <button 
                     type="button" 
                     className="text-sm cursor-pointer font-semibold mt-9 rounded-xl px-2 py-2 bg-red-500 border-none text-white"
                  >{heroBanner.buttonText}</button>
               </Link>

               <div className="absolute right-16 bottom-5 w-80 leading-4 flex flex-col text-[#324d67]">
                  <h5 className="mb-3 font-bold text-base self-end">Description</h5>
                  <p className="text-[#5f5f5f] text-right">{heroBanner.desc}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroBanner;