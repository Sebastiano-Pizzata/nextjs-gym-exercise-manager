"use client"
import { useState } from "react";

export default function StartBanner({ onStart }) {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(false);
        setTimeout(() => onStart(), 400);
    };

    return (
        <div
            className={`transition-opacity duration-500
            ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <div className="
                w-full max-w-3xl mx-auto mt-10
                rounded-2xl shadow-2xl
                bg-zinc-900 border border-white/10
                px-10 py-14 text-center
                relative overflow-hidden
            ">

                {/* Glow dinamico dietro al banner */}
                <div className="
                    absolute inset-0
                    bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/10
                    blur-2xl opacity-60
                "></div>

                {/* Contenuto */}
                <div className="relative z-10">
                    <h1 className="
                        text-4xl font-bold text-white mb-4
                        animate-fadeIn
                    ">
                        Benvenuto!
                    </h1>

                    <p className="
                        text-lg text-gray-300 mb-10
                        animate-fadeInSlow max-w-xl mx-auto
                    ">
                        Premi il pulsante qui sotto per iniziare a esplorare gli esercizi.
                    </p>

                    <button
                        onClick={handleClick}
                        className="
                            px-10 py-3 rounded-full
                            bg-blue-600 text-white font-semibold
                            shadow-lg shadow-blue-900/40
                            transition-all duration-300
                            hover:bg-blue-500 hover:shadow-blue-500/50 hover:scale-110
                            active:scale-95
                            cursor-pointer
                        "
                    >
                        Iniziamo
                    </button>
                </div>
            </div>
        </div>
    );
}
