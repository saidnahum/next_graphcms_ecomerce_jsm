import Head from 'next/head';
import { Product, HeroBanner, FooterBanner } from '../components';
import apolloClient from '../lib/graphql/apolloClient';
import { GET_PRODUCTS, GET_BANNERS } from '../lib/graphql/graphcms/queries';

export default function Home({products, banners}) {

   //console.log('productsData', products);
   //console.log('bannersData', banners[0]);

   return (
      <div>
         <Head>
            <title>E-Comerce</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <>
            <HeroBanner heroBanner={banners.length && banners[0]}/>

            <div className='text-center my-10'>
               <h2 className='text-4xl font-bold text-sky-900'>Best Selling Products</h2>
               <p className='text-base text-gray-400'>Speakers of many variations</p>
            </div>

            <div className='flex flex-wrap justify-center gap-4 mt-5 w-full'>
               {products.map((product) => (
                  <div key={product.id}><Product  product={product}/></div>
               ))}
            </div>

            <FooterBanner footerBanner={banners && banners[0]}/>
         </>

      </div>
   )
}

export const getServerSideProps = async () => {
   
   const res_products = await apolloClient.query({ query: GET_PRODUCTS });
   const products = res_products.data.products;

   const res_banners = await apolloClient.query({ query: GET_BANNERS });
   const banners = res_banners.data.banners;

   //console.log('Products Data: ', products);
   //console.log('Banners Data: ', banners);

   return {
      props: {
         products,
         banners
      }
   }
}