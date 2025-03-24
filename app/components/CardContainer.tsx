"use client"
import React, { useEffect, useState } from 'react'
import Card from './ui/cars/Card';
import { log } from 'console';

type Props = {}

export default function CardContainer({ }: Props) {
    const [todos, setTodos] = useState([]);
    const [todosToShow, setTodosToShow] = useState([]);
    const [showtTop3, setShowTop3] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            fetch("").then(
                (result: any) => result.json().then((data: any) => {
                    console.log(data);
                    setTodos(data);
                    setTodosToShow(data);
                }))
        };
        fetchData();
    }, []);

    useEffect(() => {
        alert("change");
    }, [showtTop3]);
    return (
        <div>
            <button onClick={() => setShowTop3(!showtTop3)}>Filter</button>
            {todosToShow.map((todo: any) => {
                return <Card title={todo.title} description={todo.description} />;
            })}
        </div>
    )
}
