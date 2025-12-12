"use client"
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react"

export default function SelectFilter({ start }) {

    const { handleSort, setCategory } = useGlobalContext();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null;

    return (
        <div className={`
                     bg-zinc-900 rounded-xl shadow-xl p-7 w-full max-w-xl mx-auto mb-10 
                     border border-white/10
                     ${!start ? "opacity-50 cursor-not-allowed" : ""}
                       `}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-100 tracking-tight">
                Filtra gli esercizi
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Ordinamento */}
                <div className="flex flex-col">
                    <label className="text-gray-300 font-medium mb-2">Ordina per</label>
                    <select
                        onChange={e => handleSort(e.target.value)}
                        className="
                    border border-white/20 rounded-lg px-3 py-2 
                    bg-zinc-800 text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                    shadow-sm hover:border-white/30 transition-all"


                    >
                        <option className="bg-zinc-800" value="">Nessun ordinamento</option>
                        <option className="bg-zinc-800" value="title_asc">Dalla A alla Z</option>
                        <option className="bg-zinc-800" value="title_desc">Dalla Z alla A</option>
                    </select>
                </div>

                {/* Categoria */}
                <div className="flex flex-col">
                    <label className="text-gray-300 font-medium mb-2">Categoria</label>
                    <select
                        onChange={e => setCategory(e.target.value === "" ? 0 : Number(e.target.value))}
                        className="
                    border border-white/20 rounded-lg px-3 py-2 
                    bg-zinc-800 text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                    shadow-sm hover:border-white/30 transition-all
                "
                    >
                        <option className="bg-zinc-800" value="0">Tutte</option>
                        <option className="bg-zinc-800" value="1">Petto</option>
                        <option className="bg-zinc-800" value="2">Gambe</option>
                        <option className="bg-zinc-800" value="3">Schiena</option>
                        <option className="bg-zinc-800" value="4">Spalle</option>
                        <option className="bg-zinc-800" value="5">Cardio</option>
                    </select>
                </div>

            </div>
        </div>




    )
}