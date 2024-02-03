import React from 'react'
import { convertTimeStamp } from '../../../lib/helpers/helpers'
import "./TableSingleItem.scss"
export default function Date({data="8 may"}) {
     const date = convertTimeStamp(data)
  return (
    <div className='date'>
        {date}
    </div>
  )
}
