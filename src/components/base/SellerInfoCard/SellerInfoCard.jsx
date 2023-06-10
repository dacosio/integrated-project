import React from 'react'
import Image from './../Image/Image'
import { BsPinMapFill } from 'react-icons/bs'
import './SellerInfoCard.css'

const SellerInfoCard = ({source, username, location, items}) => {

  const inventory = () => {
    return items === "1" ? `1 item sold` : `${items} items sold`
  }

  return (
    <div className='seller-information'>
      <h2>Splitter Information</h2>
      <div className="image-container">
        <Image source={source}/>
      </div>
      <div className="seller-details">
        <p className="username">{username}</p>
        <BsPinMapFill /><p className="location">{location}</p>
        <p className="items">{inventory()}</p>
      </div>
    </div>
  )
}

export default SellerInfoCard
