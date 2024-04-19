import React from 'react'
import { GoSearch } from "react-icons/go";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Leaf from "../assets/green-leaf.png"
import Img1 from "../assets/pexels-ella-olsson-1640777.jpg"
import Img2 from "../assets/pexels-jane-trang-doan-1099680.jpg"
import Img3 from "../assets/pexels-jane-trang-doan-1128678.jpg"
import Bgimg from "../assets/pexels-rachel-claire-4846351.jpg"
import Img5 from "../assets/pexels-karolina-grabowska-4230619.jpg"

export default function Navbar() {
    return (
        <div>
            <div className='bg-orange-400 '>
                <nav className='mx-[100px] flex justify-between text-center items-center py-[10px]'>
                    <p className='text-2xl'>My Logo</p>
                    <div>
                        <ul className='flex text-white'>
                            <li className='mx-2 cursor-pointer'>Home</li>
                            <li className='mx-2  cursor-pointer'>Menu</li>
                            <li className='mx-2  cursor-pointer'>Order</li>
                            <li className='mx-2  cursor-pointer'>Blog</li>
                            <li className='mx-2  cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <p className='mx-2'><GoSearch color='white' /></p>
                        <p className='mx-2'> <RiShoppingBasketFill color='white' /></p>
                        <p className='mx-2'>  <FaUser color='white' /></p>
                    </div>
                </nav>

            </div>
           <div style={{ backgroundImage: `url(${Bgimg})`, backgroundSize: 'cover'}} className='relative py-[20px]'>
           <div className='mx-[100px] mt-[20px] '>
               <div>
               <div>
                    <img src={Leaf} alt="" className='h-8 w-8' />
                </div>
                <p className=' text-4xl font-extrabold font-sans my-[10px] text-white'>HAVE A <span className='text-orange-400 text-4xl font-extrabold'>DELICIOUS</span> MEAL WITH US.</p>
                <p className='text-white'>A restaurant is a place where people go to eat, frequently with friends, family, or coworkers</p>
                <div className='mt-[40px] mb-[30px]'>
                    <button className='bg-orange-400 rounded-[5px] text-white p-[5px] mr-[10px]'>View Our Menu</button>
                    <button className=' rounded-[5px] border border-white p-[5px] text-white'>Book a Table</button>
                </div>
                <div className='flex'>
                    <img src={Img1} alt="" className='h-16 w-28 mr-[15px] rounded-sm' />
                    <img src={Img2} alt="" className='h-16 w-28 mr-[15px] rounded-sm' />
                    <img src={Img3} alt="" className='h-16 w-28 rounded-sm' />
                </div>
               </div>
               {/* <div className='absolute top-[20px] right-[40px]'>
                <img src={Img5} alt=""  className=' w-[30rem] h-[20rem] p-[10px]'/>
               </div>
               <div className='rounded-[50%] bg-orange-400 absolute top-[90px] p-[20px] right-[170px] border border-white text-white'>
                    <p>25%</p>
                    <p>Off</p>
               </div> */}
            </div>
           </div>

        </div>
    )
}
