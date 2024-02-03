import React from 'react'
import Container from '../../common/Container'
import './Table.scss'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
export default function Table() {
  return (
    <>
    <div className='table-section'>
    <Container>
            <div className='table'>
                <TableHeader/>
                <TableBody/>
            </div>
    </Container>
    </div>
   
     
    </>
  )
}
