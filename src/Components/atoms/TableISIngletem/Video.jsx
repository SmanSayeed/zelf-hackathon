import React from 'react'
import "./TableSingleItem.scss"
import Text from '../Text'
import { iconImages } from '../../../lib/constants/images'
import "./TableSingleItem.scss"
import { stringShortener } from '../../../lib/helpers/helpers'
export default function Video({data,link}) {
  console.log(link)
  return (
    <a href={link} className='video'>
        <img src={iconImages.playIcon} alt="Play icon" />
        <Text className="video-btn-text" >
            {stringShortener(data)}
        </Text>
    </a>
  )
}
