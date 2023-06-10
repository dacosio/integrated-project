import React from 'react'
import "./DescriptionCard.css"
import Button from "./../Button/Button"

const DescriptionCard = ({description, portionDescription}) => {
  return (
    <div className='description-container'>
        <div className="item-description">
        <h2>Description</h2>
        <p>{description}</p>
        </div>
        <div className="portion-description">
        <h2>Each portion contains</h2>
        <p>{portionDescription}</p>
        </div>
        <div className="button">
        <Button size="lg" variant="primary" label="Request Purchase"/>
        </div>
    </div>
  )
}

export default DescriptionCard
