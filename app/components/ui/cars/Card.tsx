"use client";
import { Car } from '@/lib/types/types'
import React, { useState } from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false); //Sowie eine Gedächtnisvariable in Java
    return (
        <div
            className={'shadow p-4 hover:cursor-pointer ${isActive?"bg-amber-200":"bg-gray-200}'}
            onClick={() => {
                setIsActive(!isActive);
            }}>
            <h2 className='font-bold text-2xl'>{car.name}</h2>
            <div>{car.color}</div>
            {isActive ? "active" : "inactive"}
        </div>
    )
}

