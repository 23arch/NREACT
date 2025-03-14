import React from 'react'
import Card from '../components/ui/cars/Card'
import { Car } from '@/lib/types/types';
import CarList from './CarList';

type Props = {}



const cars: Car[] = [
    {
        name: "Super",
        type: "VW",
        color: "black",
        motor: {
            serialNumber: 1234,
            hp: 200,
        },
    },
    {
        name: "Speedster",
        type: "Porsche",
        color: "red",
        motor: {
            serialNumber: 5678,
            hp: 450,
        },
    },
    {
        name: "Road King",
        type: "Ford",
        color: "blue",
        motor: {
            serialNumber: 9101,
            hp: 350,
        },
    },
    {
        name: "EcoRide",
        type: "Toyota",
        color: "green",
        motor: {
            serialNumber: 1121,
            hp: 150,
        },
    },
    {
        name: "Luxury Cruiser",
        type: "Mercedes",
        color: "white",
        motor: {
            serialNumber: 3141,
            hp: 400,
        },
    },
];

export default function Cars({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            <CarList cars={cars} />
        </div>
    )
}
