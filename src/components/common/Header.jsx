"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Header() {

    const pathName = usePathname();

    const [open, setOpne] = useState(true)
    const [close, setClose] = useState(false)

    const menus = [
        {
            lable: 'Home',
            link: '/'
        },
        {
            lable: 'About Us',
            link: '/about'
        },
        {
            lable: 'Products',
            link: '/products'
        },
        {
            lable: 'Product Listing',
            link: '/productListing'
        },
        {
            lable: 'Cart',
            link: '/productListing'
        },

    ]

    return (
        <>
            <header className=' bg-indigo-400 px-2 sticky top-0 z-50'>
                <div className=' container mx-auto flex justify-between items-center py-3 '>
                    <div className=' text-[35px] bg-white text-rose-400 rounded-md px-2 font-bold uppercase'>Gaurav<span className=' text-black text-[14px]'>.com</span></div>

                    <nav className={` ${open ? 'md:block hidden': ' block'}`}>
                        <ul className={`${open ? 'flex gap-2': ' flex flex-col gap-4 absolute top-[100%] w-[100%] left-0 p-5 bg-indigo-300'}`}>
                            {
                                menus.map((items, index) => {
                                    return (
                                        <li onClick={()=> setOpne(true)} key={index} className='text-[18px] font-semibold'>
                                            <Link href={items.link} className={`${pathName === `${items.link}` ? ' text-white bg-rose-400 rounded-md py-2 px-2' : 'py-2 px-2 hover:bg-rose-400 rounded-md'}`}>{items.lable}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>

                    <i onClick={() => setOpne(false)} className={`text-[25px]  ri-menu-line ${open ? 'md:hidden block' : 'hidden'}`}></i>
                    <i onClick={() => setOpne(true)} className={`text-[25px] ri-close-large-line ${open ? 'hidden' : 'md:hidden block'}`}></i>

                </div>
            </header>
        </>
    )
}
