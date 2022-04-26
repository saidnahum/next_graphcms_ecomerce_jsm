import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
   return (
      <div className='text-center my-5 text-sky-900'>
         <p className='font-bold text-sm'>2022 JSM Headphones All Rights Reserverd</p>
         <p className='flex justify-center items-center my-1 text-2xl space-x-2'>
            <AiFillInstagram/>
            <AiOutlineTwitter/>
         </p>
      </div>
   )
}

export default Footer