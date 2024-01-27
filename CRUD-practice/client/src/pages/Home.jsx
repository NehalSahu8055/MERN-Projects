import React from 'react'
import Product from '../components/Product';
import { FcAddDatabase } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
  <>
    <header  className='flex justify-between fixed top-0 right-0 left-0 z-50 bg-white shadow-md py-1.5 px-4'>
      <Link to='/' className="font-bold my-auto text-lg">ecoX</Link>
      <Link to='add-product'>
          <button className='bg-slate-700 p-1 rounded-lg'><FcAddDatabase size={30}/></button>
         </Link>
    </header>
    <main className='grid max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5  m-8 mt-20'>
    <Product/>
    </main>
    </>
  )
}

export default Home
