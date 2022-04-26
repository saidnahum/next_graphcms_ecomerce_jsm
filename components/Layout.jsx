import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
   return (
      <div className='p-3'>
         <Head>
            <title>Said's Store</title>
         </Head>

         <header>
            <Navbar/>
         </header>

         <main className='max-w-7xl mx-auto mb-3'>
            {children}
         </main>

         <footer>
            <Footer/>
         </footer>
      </div>
   )
}

export default Layout