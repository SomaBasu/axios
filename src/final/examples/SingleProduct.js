import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const url = 'https://course-api.com/react-store-products';

export const SingleProduct = () => {
  const { productId } = useParams();
  let [dataArr,setDataArr] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      dataArr = response.data;
     setDataArr(dataArr);      
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
   
  }, []);
  
  return (
  <div className='product-container'> 
    {dataArr.map (data => {
      if(data.id === productId){
        return (
          <div className='produc-item' key={data.id}>        
            <img src={data.image} />
            <h2>{data.name}</h2>
            <h4>{data.company}</h4>
            <p>{data.description}</p>
            <h5>{data.price}</h5>
          </div>
        )   
      }
    }        
)}     
</div>
  );
};

export default SingleProduct;