import { useRouter } from 'next/router'
import React from 'react'


export default function Blog() {
    const router = useRouter();
    console.log(router.query)

    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}
