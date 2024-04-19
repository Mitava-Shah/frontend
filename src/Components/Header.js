import React from 'react'
import { IoIosMail } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";

export default function Header() {
    return (
        <>
            <div className=' mx-[100px]  flex justify-between'>
                <div className='flex justify-between'>
                   <div>
                   <p>Facebook | Instagram </p>
                   </div>
                    <div className='flex ml-[2rem] items-center'>
                       <div className=''>
                       <IoIosMail color='orange'  size={20}/>
                       </div>
                       <p className='ml-[5px]'> infi@example.com</p>
                    </div>
                </div>
                <div className='flex text-center'>
               <div className='mt-[5px]'> <LuBellRing color='orange'/></div>
                <p className='pl-[5px]'> Get 30% Discount for all foods till April, 25</p>
                </div>
            </div>
        </>
    )
}
