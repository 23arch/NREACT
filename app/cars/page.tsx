import React from 'react'
import Card from '../components/ui/cars/Card'
import { Car } from '@/lib/types/types';

type Props = {}



const car: Car = {
    name: "Super",
    type: "VW",
    color: "black",
    motor: {
        serialNumber: 1234,
        hp: 200,
    },
};


export default function Cars({ }: Props) {
    return (
        <div>Cars
            <Card car={car} />
        </div>
    )
}
