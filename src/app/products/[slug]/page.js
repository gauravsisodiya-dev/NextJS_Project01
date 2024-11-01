"use client"

import ProductDetails from '@/components/ProductDetails'
import React from 'react'
import { useParams } from 'next/navigation';



export default function page() {

    const params = useParams()

    // console.log(slug)

    return (

        <>
            <ProductDetails params = {params}/>
        </>
    )
}

