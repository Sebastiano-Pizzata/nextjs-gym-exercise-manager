"use client"
import { useGlobalContext } from "../context/GlobalContext"


export default function SearchBar() {
    const { search, setSearch } = useGlobalContext();

    return (
        <div className="flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-white/40 transition-all duration-300">
            <input
                type="text"
                placeholder="Cerca esercizi..."
                onChange={e => setSearch(e.target.value)}
                value={search}
                className="flex-1 px-5 py-3 text-gray-100 bg-transparent outline-none text-sm placeholder-gray-200 rounded-l-full transition-colors duration-200"
            />
            <button className="flex items-center gap-2 bg-white/30 hover:bg-white/40 text-gray-900 px-5 py-3 rounded-r-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                Cerca
            </button>
        </div>
    )
}