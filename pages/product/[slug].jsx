import {useState, useContext} from 'react'
import apolloClient from '../../lib/graphql/apolloClient';
import { GET_PRODUCTS, GET_PRODUCTS_SLUGS, GET_PRODUCT_BY_SLUG } from '../../lib/graphql/graphcms/queries';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import Head from 'next/head';
import { useStateContex } from '../../context/StateContext';

const ProductPage = ({ product, products }) => {

   const { name, details, image, price } = product;
   const [index, setIndex] = useState(0);
   const { decQty, incQty, qty, onAdd, setShowCart } = useStateContex();

   const handleBuyNow = () => {
      onAdd(product, qty);
      setShowCart(true);
   }

   return (
      <div>
         <Head>
            <title>E-Comerce | {name}</title>
         </Head>
         <div className='flex'>
            <div className=''>
               <div className='bg-zinc-300 rounded-md w-[400px] h-[400px] cursor-pointer mb-5 transition ease-in-out duration-300 hover:bg-red-300'>
                  <img src={image && image[index]?.url} alt="" />
               </div>

               <div className='flex gap-3'>
                  {image?.map((img, i) => (
                     <img 
                        src={img.url} 
                        key={i} 
                        alt="Product Image"
                        onMouseEnter={() => setIndex(i)}
                        className={`rounded-md bg-zinc-300 w-16 h-16 cursor-pointer ${i === index && 'bg-red-300'}`}
                     />
                  ))}
               </div>
            </div>

            <div className='flex flex-col w-1/2 p-20 space-y-3'>
               <h1 className='text-2xl font-bold text-sky-900'>{name}</h1>

               <div className='flex items-center'>
                  <div className='flex text-red-500'>
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                     <AiFillStar />
                     <AiOutlineStar />
                  </div>
                  <p className='text-zinc-400 text-sm'>
                     (20)
                  </p>
               </div>

               <h4 className='text-sky-900 font-bold'>Details: </h4>
               <p className='text-sm text-zinc-500'>{details}</p>
               <p className='text-zinc-500 font-bold'>${price}</p>

               <div className='flex items-center'>
                  <h3 className='text-sky-900 font-bold mr-5'>Quantity: </h3>
                  <p className='flex items-center'>
                     <span className='border inline-flex items-center justify-center h-8 w-10 text-red-500 cursor-pointer hover:text-red-300' onClick={decQty}>
                        <AiOutlineMinus />
                     </span>

                     <span className='border inline-flex items-center justify-center h-8 w-10 font-bold'>
                        {qty}
                     </span>

                     <span className='border inline-flex items-center justify-center h-8 w-10 text-green-600 cursor-pointer hover:text-green-400' onClick={incQty}>
                        <AiOutlinePlus />
                     </span>
                  </p>
               </div>

               <div className='flex space-x-5'>
                  <button 
                     type='button' 
                     className='block w-full px-3 py-2 border border-red-200 mt-5 transition ease-in-out duration-300 transform hover:scale-110'
                     onClick={() => onAdd(product, qty)}
                  >
                     <span className='text-red-500 font-bold'>Add to Cart</span>
                  </button>

                  <button 
                     type='button' 
                     className='block w-full px-3 py-2 border bg-red-500 mt-5 transition ease-in-out duration-300 transform hover:scale-110'
                     onClick={handleBuyNow}
                  >
                     <span className='text-white font-bold'>By Now</span>
                  </button>
               </div>
            </div>
         </div>

         <div>
            <h2 className='text-sky-900 font-bold text-3xl text-center mb-5'>You may also like</h2>

            <div className='overflow-x-hidden overflow-y-hidden animate-marquee relative pause'>
            {/* flex flex-wrap justify-center gap-4 mt-16 w-full */}
               <div className='flex whitespace-nowrap gap-4'>
                  {products.map((product) => (
                     <div key={product.id}>
                        <Product product={product} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductPage;

export async function getStaticPaths() {

   const slugsRes = await apolloClient.query({ query: GET_PRODUCTS_SLUGS });
   const products = slugsRes.data.products;

   return {
      paths: products.map(product => ({ params: { slug: product.slug } })),
      fallback: 'blocking' // false or 'blocking'
   };
}

export const getStaticProps = async ({ params: { slug } }) => {

   const productRes = await apolloClient.query({
      query: GET_PRODUCT_BY_SLUG,
      variables: { slug }
   });

   const product = productRes.data.product;

   const res_products = await apolloClient.query({ query: GET_PRODUCTS });
   const products = res_products.data.products;

   return {
      props: {
         product,
         products
      }
   }
}