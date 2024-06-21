import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Cart.css'

export default function Cart() {
  const userId=localStorage.getItem("userId")
  const [loading,setLoading]=useState(true)
  const[userProducts,setUserProducts]=useState()
  useEffect(()=>{
    getCartProducts()
  },[])
async function getCartProducts(){
  const response=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cart?userId=${userId}`,)
  console.log(response.data.items)
  setUserProducts(response.data.items)
  setLoading(false)
}
  return (
    <div className='cart-container'>
      {
        loading ?(
          <p>Loading....</p>
        ):(
          <div className='cart-items'>
            {
              userProducts.map((productItem)=>(
                <div className='cart-item' key={productItem._id}>
                  <h3>Name{productItem.product.name}</h3>
                  <p>{productItem.product.price}</p>
                  <p>{productItem.product.description}</p>
                  <p>{productItem.product.category}</p>
                  <p>{productItem.product.stock}</p>
                  </div>
              ))
            }

            </div>
        )
      }
      
    </div>
  )
}
