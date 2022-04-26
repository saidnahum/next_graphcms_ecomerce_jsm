import Link from 'next/link';

const Product = ({ product: { image, name, slug, price, details} }) => {

   return (
      <div>
         <Link href={`/product/${slug}`}>
            <div className='cursor-pointer transition ease-in-out transform duration-200 hover:scale-105'>
               <img src={image && image[0].url} 
               alt="" 
               width={250}
               height={250}
               className="bg-zinc-200 rounded-2xl"
               />
               <p>{name}</p>
               <p className='font-bold'>${price}</p>
            </div>
         </Link>
      </div>
   )
}

export default Product