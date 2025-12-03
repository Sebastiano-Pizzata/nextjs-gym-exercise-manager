"use client"
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function ExercisesCarousel() {
    const { fetchExercises, sortAndFilteredEx } = useGlobalContext();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        fetchExercises();
    }, []);

    // Reset della pagina corrente quando i dati filtrati cambiano
    useEffect(() => {
        setCurrentPage(0);
    }, [sortAndFilteredEx]);

    // Calcola le pagine in base agli esercizi filtrati
    const totalPages = Math.ceil(sortAndFilteredEx.length / itemsPerPage);
    const currentItems = sortAndFilteredEx.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const goNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const goPrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    if (sortAndFilteredEx.length === 0) {
        return <p className="text-center text-gray-500 mt-6">Nessun esercizio trovato.</p>;
    }

    return (
        <div className="relative">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {currentItems.map((e) => (
                    <div
                        key={e.name}
                        className="
                    w-full h-80 bg-zinc-900 rounded-xl overflow-hidden flex flex-col
                    border border-white/10 shadow-lg
                    transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-white/20
                    cursor-pointer
                "
                    >
                        {/* Fix altezza immagine */}
                        <div className="w-full h-56 overflow-hidden">
                            <img
                                src={e.image}
                                alt={e.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-100 tracking-wide line-clamp-1">
                                {e.name}
                            </h3>
                        </div>

                        <div className="flex justify-center pb-4">
                            <button
                                className="
                            px-6 py-2 rounded-full bg-blue-600 text-white font-medium
                            transition-all duration-300 
                            hover:bg-blue-500 hover:shadow-lg hover:scale-105
                            active:scale-95
                            cursor-pointer
                        "
                            >
                                Aggiungi
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            {totalPages > 1 && (
                <>
                    {/* Prev */}
                    <button
                        onClick={goPrev}
                        className="
                         absolute left-0 top-1/2 -translate-y-1/2 
                         text-white p-4 rounded-full 
                         shadow-lg shadow-blue-900/40 
                         hover:bg-white/20 hover:shadow-blue-500/50
                         transition-all duration-300 
                         cursor-pointer
                         hover:scale-110 active:scale-95
    "
                    >
                        <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
                    </button>

                    {/* Next */}
                    <button
                        onClick={goNext}
                        className="
                         absolute right-0 top-1/2 -translate-y-1/2 
                         text-white p-4 rounded-full 
                        shadow-lg shadow-blue-900/40 
                        hover:bg-white/20 hover:shadow-blue-500/50
                        transition-all duration-300 
                        cursor-pointer
                        hover:scale-110 active:scale-95
    "
                    >
                        <FontAwesomeIcon icon={faCircleRight} size="2x" />
                    </button>
                </>
            )}
        </div>
    );
}
