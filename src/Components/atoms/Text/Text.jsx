import React from 'react'
import "./Text.scss"
export default function Text({children,variant="normal",className,shortenText=false}) {
  let variantStyle = "normal-text";
  if(variant==="heading"){
    variantStyle="heading-text";
  }
  if(variant==="secondary"){
    variantStyle="secondary-text";
  }
  return (
    <>
        <span className={`text ${variantStyle} ${shortenText && "shorten-text"} ${className}`}>
            {children}
        </span>
    </>
  )
}
