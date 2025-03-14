import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Menu({ }: Props) {
    return (
        <div>
            <ul className='flex p-4'>
                <li>
                    <Link href="/" className='p-2 hover:bg-blue-500'>Home</Link>
                </li>
                <li>
                    <Link href="/cars" className='p-2 hover:bg-blue-500'>Cars</Link>
                </li>
                <li>
                    <Link href="/trucks" className='p-2 hover:bg-blue-500'>Trucks</Link>
                </li>
            </ul>
        </div>
    )
}
