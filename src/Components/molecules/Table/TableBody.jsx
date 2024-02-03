import React, { useEffect, useState } from 'react'
import './Table.scss'
import { env } from '../../../lib/config/configEnv';
import TableItem from './TableItem';
export default function TableBody() {
  const [data,setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(env.api_url+"/contents?page=1");
      const resData = await res.json();
      if(Object.keys(resData).length){
        console.log(resData)
        const arr = [];
        for(let i=0;i<9;i++){
          arr.push(resData.data[i])
        }
        setData(arr);
      }  
    }
    fetchData() 
    
  }, []);
  return (
    <div>
        {
         data  ? 
          data.map((item,index)=>(
            <React.Fragment key={index}>
              <TableItem data={item}/>
            </React.Fragment>
          ))
          :
          "Loading..."
        }
       
    </div>
  )
}
