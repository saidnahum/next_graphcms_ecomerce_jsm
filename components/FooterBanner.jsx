import Link from 'next/link';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
   return (
      <div className='mt-10 py-5 lg:py-0 px-10 bg-red-500 rounded-2xl relative h-full leading-3 w-full'>
         <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='text-white flex flex-col items-start justify-center'>
               <p>{discount}</p>
               <h3 className='text-4xl lg:text-7xl font-bold mt-5'>{largeText1}</h3>
               <h3 className='text-4xl lg:text-7xl font-bold mb-5'>{largeText2}</h3>
               <p>{saleTime}</p>
            </div>

            <div>
               <img src={image.url} alt="" className=""/>
            </div>

            <div className='text-white flex flex-col items-end justify-center'>
               <p>{smallText}</p>
               <h3 className='text-4xl lg:text-7xl font-bold my-5 text-right'>{midText}</h3>
               <p>{desc}</p>
               <Link href={`/product/${product}`}>
                  <button className='text-sm cursor-pointer font-bold mt-9 rounded-xl px-2 py-2 bg-white border-none text-red-500'>
                     {buttonText}
                  </button>
               </Link>
            </div>

            
         </div>
      </div>
   )
}

export default FooterBanner