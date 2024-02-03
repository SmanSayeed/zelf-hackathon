import React from 'react'
import Text from '../Text'
import "./TableSingleItem.scss"
import { stringShortener } from '../../../lib/helpers/helpers'
import { defaultImage } from '../../../lib/constants/images'
export default function Creator({data,img}) {
  return (
    <div className='creator'>
      <img className='creator-img' src={img || defaultImage} alt="creator image"/>
      <Text>
        {stringShortener(data)}
      </Text>
    </div>
  )
}
