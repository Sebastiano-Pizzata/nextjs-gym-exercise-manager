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
        return <div>Caricamento esercizio...</div>;
    }

    return (
        <div className="p-4 max-w-xl mx-auto 
                        bg-zinc-900 rounded-xl overflow-hidden flex flex-col
                        order border-white/10 shadow-lg
                        ransition-all duration-300 hover:scale-[1.03]
                        over:shadow-2xl hover:border-white/20">
            <h1 className=" font-semibold text-white ">{singleEx.name}</h1>
            <img
                src={singleEx.image}
                alt={singleEx.name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <p className="text-white">{singleEx.description}</p>
        </div>
    );
}
