/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Review = (props) => {
  return (
    <div>
      <p>Star: {props.star}</p>
      <p>Message: {props.children}</p>
    </div>
  )
}

export default Review
