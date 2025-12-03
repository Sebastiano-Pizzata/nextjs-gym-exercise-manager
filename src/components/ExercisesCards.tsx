"use client"
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

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
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {currentItems.map((e) => (
                    <div
                        key={e.name}
                        className="w-full h-70 bg-white rounded-lg shadow-md overflow-hidden flex flex-col
                        transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        <img src={e.image} alt={e.name} className="w-full h-40 object-cover" />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{e.name}</h3>
                            <p className="text-gray-600 line-clamp-4">{e.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            {totalPages > 1 && (
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={goPrev}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
                    >
                        Prev
                    </button>
                    <button
                        onClick={goNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
