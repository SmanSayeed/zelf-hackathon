import React from 'react'
import './Table.scss'
import { tableItems } from '../../../lib/constants/tableItems'
import Text from '../../atoms/Text'
import SingleItem from './SingleItem'
export default function TableHeader() {
  return (
    <>
<div className='table-row'>
    {
        tableItems.map((item,index)=>(
            <React.Fragment key={index}>
                <SingleItem>
                <div className="table-header-item">
                    <Text variant="secondary" className="table-header-text">
                        {item.title}
                    </Text>
                </div>
                </SingleItem>
              
            </React.Fragment>
        ))
    }
</div>
    </>
  )
}
