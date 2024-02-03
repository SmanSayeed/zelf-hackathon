import React from 'react'
import './Table.scss'
import { tableItems } from '../../../lib/constants/tableItems'
import Text from '../../atoms/Text'
export default function TableHeader() {
  return (
    <>
<div className='table-row'>
    {
        tableItems.map((item,index)=>(
            <React.Fragment key={index}>
                <div className="table-header-item">
                    <Text variant="secondary">
                        {item.title}
                    </Text>
                </div>
            </React.Fragment>
        ))
    }
</div>
    </>
  )
}
