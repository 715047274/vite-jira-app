// import {useState} from "react";
import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import { signal } from '@preact/signals-react'

let count = signal(0);
export default function Home(){
    // const [count, setCount] = useState(0)

    const envWord = import.meta.env.VITE_APP_NAME
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <h3>{envWord}</h3>
            <div className="card">
                <button onClick={() =>  count.value++}>
                    count is {count}
                </button>
                <p className="bg-red-200">
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}