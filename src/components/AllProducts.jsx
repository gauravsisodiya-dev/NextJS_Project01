"use client"

import { ContextName } from '@/context/Context';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

export default function AllProducts() {

    const { allProduct, setAllProduct, loading, setLoading } = useContext(ContextName)


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                setAllProduct(result.products)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className=' px-8'>
            <h2 className=' text-[30px] font-semibold text-center my-5'>All Products</h2>
                <div className=' container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-10 gap-10'>
                   
                    {
                        loading
                            ?
                            <> <Loading /> <Loading /> <Loading /> <Loading /> <Loading /> <Loading /> <Loading /> <Loading /> </>
                            :
                            allProduct.map((items, index) => {
                                return (
                                    <div key={index} className=' shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] overflow-hidden rounded-md hover:scale-[1.05] duration-[0.5s]'>
                                        <Link href={`/products/${items.id}`}><img src={items.thumbnail} /></Link>
                                        <div className=' p-3 flex justify-between'>
                                            <div className=''>
                                                <h3 className=' text-gray-400'>{items.category}</h3>
                                                <Link href={`/products/${items.id}`}><h2>{items.title}</h2></Link>
                                            </div>
                                            <div>{items.warrantyInformation}</div>
                                        </div>
                                        <div className='p-3 flex gap-3'>
                                            <p>${((items.price) - ((items.price * items.discountPercentage) / 100)).toFixed(2)}</p>
                                            <del>${items.price}</del>
                                            <p>{items.discountPercentage}%OFF</p>
                                        </div>
                                        <div className='p-3 text-center'>
                                            <button className=' bg-red-400 rounded-md py-2 px-4 font-semibold text-[16px]'>Add To Cart <i className="ri-shopping-cart-fill"></i></button>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

function Loading() {
    return (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
