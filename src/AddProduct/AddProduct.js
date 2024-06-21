import React,{useState} from 'react'
import axios from 'axios'
import './AddProduct.css'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
    const[name, setName]=useState('')
    const[price, setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[stock, setStock]=useState('')
    const[description,setDescription]=useState('')
    const userRole=localStorage.getItem('userRole')
    const navigate = useNavigate()
    async function addProduct(){
        const newProduct = {name,price,category,stock,description,role:userRole}
        console.log(newProduct)
        const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/add`,newProduct)
        if(response.status===201){
            navigate("/cart")
        }
        else{
            console.log("product not added")
        }

    }
 return (
    <div className='add-product-container'>
        <div className='form-group'>
            <label>Product Name</label>
            <input
               value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Price</label>
            <input
               value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>category</label>
            <input
               value={category} onChange={(e)=>setCategory(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Stock</label>
            <input
               value={stock} onChange={(e)=>setStock(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Description</label>
            <input
               value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <button onClick={addProduct}>Add Product</button>
      
    </div>
  )
}
