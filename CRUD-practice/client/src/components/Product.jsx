import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid' 
import axios from 'axios';
import { MdDelete } from "react-icons/md";

function Product() {
const [product, setproduct] = useState([])
    async function getProducts(){
        try {
            const res = await axios.get("/api/products");
            setproduct(res.data);      
        } catch (error) {
            console.log(error)
        }
    }
    async function deleteProduct(id){
      try {
          const res = await axios.delete(`/api/products/${id}`);
          res.data && setproduct(product.filter(item =>item._id != id) )      
      } catch (error) {
          console.log(error)
      }
  }
    
    useEffect(() => {
      getProducts();
    }, [])
    
  return (
    product ? (
        product.map((product) => {
          const { _id, thumbnail, title, price, rating } = product || {};

          return (
            <article key={nanoid()} className="relative card border rounded-md overflow-hidden flex flex-col justify-between ">
              <button onClick={() => {
                deleteProduct(_id);
              }} className='absolute right-2 top-2 drop-shadow-lg hover:bg-blue-50 rounded-full p-1'><MdDelete size={25} color='skyblue'/></button>
              <div>
                <img src={thumbnail} alt={title} width="200" />
              </div>
              <div className="detail px-2 grid gap-3">
                <h1 className="text-md px-2 pt-4 font-bold">{title}</h1>
                <hr />
                <div className="about flex justify-between">
                  <span className="price">₹ {price}</span>
                  <span className="rating">({rating})⭐</span>
                </div>
                <button
                  className="add-to-cart-btn bg-blue-100 mb-2 text-blue-900 px-2 rounded-md py-1"
                  onClick={() => {
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </article>
          );
        })):<p>Page not available</p>
  )
}

export default Product