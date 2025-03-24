"use client";
import { Car } from '@/lib/types/types';
import { useState } from 'react';

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false); //Sowie eine Gedächtnisvariable in Java
    return (
        <div
            className={`mt-4 mx-2 shadow-xl p-6 hover:scale-[1.03] hover:cursor-pointer 
            rounded-3xl transition-all duration-300 ease-in-out 
            ${isActive ? "bg-gradient-to-br from-green-700 to-green-900" : "bg-red-600"} 
            hover:from-blue-600 hover:to-blue-800 
            text-white font-semibold tracking-wide md:grid-cols-4 grid-cols-2`}

            onClick={() => {
                setIsActive(!isActive);
            }}>
            <h2 className='font-bold text-2xl'>{car.name}</h2>
            <div>{car.color}</div>
            {isActive ? "active" : "inactive"}
        </div>
    )
}

