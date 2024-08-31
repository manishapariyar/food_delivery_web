import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import {toast} from "react-toastify"

const List = (url) => {


  const [list,setList] = useState([]);


  const fetchList =  async () =>{
    const response = await axios.get(`${url}/api/food/list`);
   

    if (response.data.success) {
      setList(response.data.data)
      
    }
    else{
      toast.error("Error");
    }

  
  }

  const removefood = async (foodId) => {
    try {
    
      const response = await axios.post(`${url}/api/food/remove`,{id: foodId});
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      }
      else{
        toast.error("Error");
      }
  
    } catch (error) {
      console.error("Error removing food item:", error);
    }
  };

  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className="list add flex-col">
     <p>All food list</p>
     <div className="list-table">
      <div className="list-table-format title">
      <b>Image</b>
      <b>Name</b>
      <b>category</b>
      <b>Price</b>
      <b>Action</b>
      </div>
      {list.map((item,index)=>{
         return (
          <div key={index} className='list-table-format'>
            <img className='item-img' src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>$ {item.price}</p>
            <p><button className="btn btn-danger" onClick={()=>removefood(item._id)}>Delete</button></p>
          </div>
         )
      })}
     </div>
    </div>
  )
}

export default List
