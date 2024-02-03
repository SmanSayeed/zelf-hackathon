import React, { useEffect, useState } from 'react'
import './Table.scss'
import { env } from '../../../lib/config/configEnv';
import TableItem from './TableItem';
export default function TableBody() {
  const [data,setData] = useState([]);
  const [page,setPage] = useState(null);
  const [next,setNext] = useState(null);
  const [prev,setPrev] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(env.api_url+"/contents?page=1");
      const resData = await res.json();
      if(Object.keys(resData).length){
        console.log(resData)
        setData(resData.data);
        setPage(resData.page);
        setNext(resData.next);
        if(page>1){
          setPrev(page-1);
        }
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
