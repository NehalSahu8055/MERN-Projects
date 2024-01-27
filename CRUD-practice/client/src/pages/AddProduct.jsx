import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function AddProduct() {
  const [product, setproduct] = useState()
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function addProduct(product){
    try {
        const res = await axios.post("/api/products",product);
        console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}
  
  return (
    <article className='m-4 grid'>
        <h2 className='text-blue-500 text-2xl font-semibold '>Add Product</h2>
        <hr className='my-4 mb-6'/>
    <form onSubmit={handleSubmit( data => {setproduct(data); console.log(data); addProduct(data)})} className='grid space-y-2'>
      <input type="text" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Title" {...register("title")} />
      <input type="text" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Description" {...register("description")} />
      <input type="number" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Price" {...register("price")} />
      <input type="number" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Discount Percentage" {...register("discountPercentage")} />
      <input type="number" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Rating" {...register("rating")} />
      <input type="number" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Stock" {...register("stock")} />
      <input type="text" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Brand" {...register("brand")} />
      <input type="text" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Category" {...register("category")} />
      <input type="text" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1' placeholder="Thumbnail" {...register("thumbnail")} />

      <input type="submit" className='border border-blue-100 hover:border-b-2 border-b-2 transition focus:outline-none focus:border-b-blue-700 hover:border-b-blue-400 px-3 rounded-md py-1 w-fit mx-auto' />
    </form>
    </article>
  );
}

export default AddProduct;