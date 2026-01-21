"use client";

import { useEffect } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useParams } from "next/navigation";

export default function SinglePage() {
    const params = useParams();
    const { fetchSingleEx, singleEx } = useGlobalContext();

    const idStr = params?.id;

    useEffect(() => {
        fetchSingleEx(Number(idStr));
    }, [idStr, fetchSingleEx]);

    if (!singleEx) {
        return <div className="flex justify-center items-center h-screen text-white text-lg">Caricamento esercizio...</div>;
    }

    return (
        <div className="flex justify-center items-start min-h-screen bg-gradient-to-b to-zinc-950 py-12 px-6">
            <div className="max-w-3xl w-full bg-transparent backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl">

                {/* Immagine con overlay e animazione */}
                <div className="relative group">
                    <img
                        src={singleEx.image}
                        alt={singleEx.name}
                        className="w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h1 className="text-4xl font-extrabold text-white">
                            {singleEx.name}
                        </h1>
                    </div>
                </div>

                {/* Contenuto testuale */}
                <div className="p-8 space-y-6 text-white">
                    <p className="text-lg leading-relaxed tracking-wide">{singleEx.description}</p>
                </div>
            </div>
        </div>


    );
}
