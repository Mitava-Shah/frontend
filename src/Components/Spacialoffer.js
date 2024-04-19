import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";
import Bgimg from "../assets/pexels-goumbik-1410140.jpg"

export default function Spacialoffer() {
    return (
        <div className='py-[8rem] mt-[2rem]'  style={{ backgroundImage: `url(${Bgimg})`, backgroundSize: 'cover'}}>
            <div className='mx-[100px]'>
                <p className='text-black font-sans'>Spacial Offer</p>
                <p className='text-orange-400 text-[5rem] font-bold '>MOTHER'S DAY</p>
                <p>Celebrate Mother's Day with love! Enjoy 20% off on all items as a toke of application</p>
                <div className='mt-8'>
                    <button className='text-gray-600 mr-[5px] bg-white px-[10px] py-[5px]'>Order Now</button>
                    <button className='bg-white p-[5px] mr-[5px] rounded-sm ml-[10px] '><IoIosSearch color='gray' size={20} /></button>
                    <button className='bg-white p-[5px] mr-[5px] rounded-sm '><CiHeart color='gray' size={20} /></button>
                    <button className='bg-white p-[5px] rounded-sm'><LuArrowLeftRight color='gray' size={20} /></button>
                </div>
            </div>
        </div>
    )
}
