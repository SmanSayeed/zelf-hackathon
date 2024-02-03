import React from 'react'
import "./Text.scss"
export default function Text({children,variant="normal",className}) {
  let variantStyle = "normal-text";
  if(variant==="heading"){
    variantStyle="heading-text";
  }
  if(variant==="secondary"){
    variantStyle="secondary-text";
  }
  if(variant)
  return (
    <>
        <span className={`text ${variantStyle} ${className}`}>
            {children}
        </span>
    </>
  )
}
