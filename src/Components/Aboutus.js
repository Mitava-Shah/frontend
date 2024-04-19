import React from 'react'
import Img1 from "../assets/pexels-karolina-grabowska-4202392.jpg"
import Leaf from "../assets/green-leaf.png"
export default function Aboutus() {
    return (
        <>
            <div className='mx-[100px] mt-8 flex '>
               
                    <img src={Img1} alt="" className='h-80 w-[25rem]' />
               
                <div className='ml-16 '>
                    <img src={Leaf} alt="" className='h-8 w-8' />
                    <p className='text-orange-400 font-semibold'>About Us</p>
                    <p className='text-4xl font-semibold mb-[10px]'>Discover your favorite food within our restaurant</p>
                    <p className='text-gray-600 font-semibold leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora saepe soluta unde earum eaque quam, assumenda non aliquam distinctio.</p>
                    <button className='rounded-md border-2 border-gray-500 py-[5px] px-[15px] mt-[20px]'>Read More</button>
                </div>
            </div>
        </>
    )
}
