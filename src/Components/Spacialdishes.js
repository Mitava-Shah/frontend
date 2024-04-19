import React from 'react'

import { IoMdArrowForward } from "react-icons/io";
import { HiStar } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuArrowLeftRight } from "react-icons/lu";

import Leaf from "../assets/green-leaf.png"
import Burger from "../assets/pexels-valeria-boltneva-1199957.jpg"
import Pizza from "../assets/pexels-lum3n-44775-568370.jpg"
import Pizza2 from "../assets/pexels-lukasfst-21077135.jpg"
import Burger2 from "../assets/pexels-polina-tankilevitch-4109243.jpg"

export default function Spacialdishes() {
    return (
        <div className='mx-[100px] mt-[20px]'>
            <img src={Leaf} alt="" className='h-8 w-8' />
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-4xl'>Our Spacial Dishes</p>
                <div className='flex items-center'>
                    <p className='  mr-[10px]'>View All</p>
                    <IoMdArrowForward />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-[20px] ">
                <div className="grid gap-4">
                    <div>
                        <img className="h-[32rem] w-full object-cover rounded-lg" src={Burger} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-64 w-full object-cover rounded-lg" src={Pizza} alt="" />
                        <div className=' absolute top-[58rem] right-[20%] bg-white opacity-80 rounded-md'>
                            <div className='p-[3rem]'>
                                <div className='flex'>
                                    <HiStar color='orange' />
                                    <HiStar color='orange' />
                                    <HiStar color='orange' />
                                    <HiStar color='orange' />
                                    <HiStar color='orange' />

                                </div>
                                <div className='flex justify-between'>
                                    <p className='mr-[2rem]'>Italian cheese</p>
                                    <button className='bg-orange-400  px-[10px] py-[5px] text-white rounded-sm'>$150</button>
                                </div>
                                <div className=''>
                                    <button className='text-gray-600 mr-[5px] bg-white px-[10px] py-[5px]'>Order Now</button>
                                    <button className='bg-white p-[5px] mr-[5px] rounded-sm'><IoIosSearch color='gray' /></button>
                                    <button className='bg-white p-[5px] mr-[5px] rounded-sm '><CiHeart color='gray' /></button>
                                    <button className='bg-white p-[5px] rounded-sm '><LuArrowLeftRight color='gray' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <img className="h-[15rem] w-full object-cover rounded-lg" src={Burger2} alt="" />
                        <img className="h-[15rem] w-full object-cover rounded-lg" src={Pizza2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
