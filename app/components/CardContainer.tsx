"use client"
import React, { useEffect, useState } from 'react'
import Card from './ui/cars/Card';

type Props = {}

export default function CardContainer({ }: Props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("in Effect");
    }, []);
    return (
        <div>
            {todos.map((todo: any) => {
                return <Card title={todo.title} description={todo.description} />;
            })}
        </div>
    )
}
