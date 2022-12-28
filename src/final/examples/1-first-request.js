import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../index.css'
// limit, if 429 wait for 15 min and try again

const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  let [dataArr,setDataArr] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      dataArr = response.data;
     // console.log("here is the data array");
     setDataArr(dataArr);
       //console.log(dataArr);
       //console.log(dataArr[0].name);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
   
  }, []);
  
  return (
  <div className='grid-container'> 
    {dataArr.map (data =>
      <div className='grid-item' key={data.id}>
        <Link to={`/products/${data.id}`} >
        <img src={data.image} />
        <h2>{data.name}</h2>
        </Link>
      </div>
    )}
     
  </div>
);
};

export default FirstRequest;
