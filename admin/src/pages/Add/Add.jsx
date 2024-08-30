import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
const Add = () => {

   const [image,setimage] = useState()

  return (
    <div className='add'>
       <form className='flex-col'>
        <div className="add-img-upload flex-col">
           <p>Upload Image</p>
           <label htmlFor='image'>
            <img src={assets.upload_area} alt="" />
           </label>
           <input type="file" id="image" name="image"  required hidden/>
        </div>
        <div className="add-product-name flex-col">
          <p>Prodcut Name</p>
           <input type="text" name="name" id="" placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Prodcut Description</p>
           <textarea type="text" name="description"  placeholder=' Write content here' rows='6' required />
        </div>
        <div className="add-category-price ">
          <div className="add-cotegory flex-col">
            <p>Product category</p>
            <select name='category'>
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
          <input type="number" name='price' placeholder='$12' />
        </div>
        </div>
        
        <button className='add-btn' type='submit'>ADD</button>
       </form>
    </div>
  )
}

export default Add
