import Link from 'next/link'
import React from 'react'



export default function Menu() {
    return (
        <div className="bg-yellow-300 shadow-md">
            <div className="flex justify-center p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-full transition duration-300">Home</Link>
                    </li>
                    <li>
                        <Link href="/cars" className="p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-full transition duration-300">Cars</Link>
                    </li>
                    <li>
                        <Link href="/trucks" className="p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-full transition duration-300">Trucks</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
