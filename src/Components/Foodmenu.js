import React from 'react'
import Leaf from "../assets/green-leaf.png"

export default function Foodmenu() {
  return (
    <div className='flex justify-center items-center'>
      <img src={Leaf} alt="" className='h-8 w-8' />
      <p className='text-orange'>Food Menu</p>
      <p>Our Popular Delious Food</p>
    </div>
  )
}
