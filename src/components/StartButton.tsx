"use client"
import { useState } from "react"


export default function StartButton({ onStart }) {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(false);
        onStart();
    }

    if (!visible) return null;

    return (
        <>
            <div className="flex justify-center py-8">
                <button
                    onClick={handleClick}
                    className="
                    px-6 py-2 rounded-full bg-blue-600 text-white font-medium
                    transition-all duration-300
                    hover:bg-blue-400 hover:shadow-lg hover:scale-105
                    active:scale-95 cursor-pointer
                    ">
                    Iniziamo
                </button>
            </div>
        </>
    )
}