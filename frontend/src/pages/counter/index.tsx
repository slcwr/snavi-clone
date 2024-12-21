"use client";
import { useAppDispatch, useAppSelector } from "@/stores";
import{ decrement,increment,setValue } from "@/stores/reducers/CounterReducer";
import {useEffect } from "react";

export default function Home() {
    const { value } = useAppSelector((state) => state.counters);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setValue(100));
    },[]);

    return (
        <main>
            <div>Count: {value}</div>
            <button onClick={() => { dispatch(increment()); }}>+</button>
            <button onClick={() => { dispatch(decrement()); }}>-</button>
        </main>
    );

}