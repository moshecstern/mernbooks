import React from 'react'

export default function Header({ category, rightTally, wrongTally }) {

  return (
    <React.Fragment>
      <div className="headContainer">
        <div className="cat">{category}</div>
        <div className="tally">
          <span className="rTally">Right:{rightTally}</span>
          <span className="wTally">Wrong:{wrongTally}</span>
        
        </div>
      </div>
    </React.Fragment>
  )
}