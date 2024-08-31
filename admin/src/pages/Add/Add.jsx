import React, { useState } from 'react'
import "./Add.css"
import axios from "axios"
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
const Add = ({url}) => {
  
   const [image,setImage] = useState(false)
   const [data,setData] = useState({
    name: "",
    description:"",
    price: "",
    category:"salad"
   })

   const onChangeHandler = (event) =>{
     const name = event.target.name;
     const value = event.target.value;
     setData((data) => ({ ...data, [name]: value }));
   }
   
   const onSubmitHandler = async (event) =>{
       event.preventDefault();
       const formData = new FormData();
       formData.append("name",data.name);
       formData.append("description",data.description)
       formData.append("price",Number(data.price))
       formData.append("category",data.category)
       formData.append("image",image)
       try {
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
          setData({
            name: "",
            description: "",
            price: "",
            category: "salad"
          });
          setImage(false);
          toast.success(response.data.message)
        } else {
        
          toast.error(response.data.message)
        }
      } catch (error) {
        console.error("Error submitting form:", error);  // Improved error logging
      }

 
      
   }
   

  return (
    <div className='add'>
       <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
           <p>Upload Image</p>
           <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
           </label>
           <input type="file" id="image" name="image"  required hidden onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <div className="add-product-name flex-col">
          <p>Prodcut Name</p>
           <input  onChange={onChangeHandler} value={data.name} type="text" name="name" id="" placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Prodcut Description</p>
           <textarea onChange={onChangeHandler} value={data.description} type="text" name="description"  placeholder=' Write content here' rows='6' required />
        </div>
        <div className="add-category-price ">
          <div className="add-cotegory flex-col">
            <p>Product category</p>
            <select name='category' onChange={onChangeHandler} >
              <option value="salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Pasta">Pasta</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Cake">Cake</option>
              <option value="Pizza">Pizza</option>
              <option value="Noodles">Noodles</option>
              <option value="Non Veg">Non-Veg</option>


            </select>
          </div>
          <div className="add-price flex-col">
          <p>Product price</p>
          <input  onChange={onChangeHandler}  value={data.price} type="Number" name='price' placeholder='$12' />
        </div>
        </div>
        
        <button className='add-btn' type='submit'>ADD</button>
       </form>
    </div>
  )
}

export default Add
