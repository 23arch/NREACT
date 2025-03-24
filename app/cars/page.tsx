import { Car } from '@/lib/types/types';
import CarList from './CarList';

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

export default function Cars() {
    return (
        <div className="bg-yellow-200 min-h-screen">
            <h1 className="text-center text-4xl font-bold p-4 text-amber-600">Willkommen zum Auto-Projekt!</h1>
            <CarList cars={cars} />
        </div>
    )
}
