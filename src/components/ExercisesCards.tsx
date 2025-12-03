"use client"
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

export default function ExercisesCards() {
    const { fetchExercises, sortAndFilteredEx } = useGlobalContext();

    useEffect(() => {
        fetchExercises()
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-6 ">
            {sortAndFilteredEx.map((e) => (
                <div
                    key={e.name}
                    className="w-72 h-70 bg-white rounded-lg shadow-md overflow-hidden flex flex-col
                    transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                    <img
                        src={e.image}
                        alt={e.name}
                        className="w-full h-40 object-cover"
                    />

                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{e.name}</h3>

                        <p className="text-gray-600 line-clamp-4">
                            {e.description}
                        </p>

                        <div className="mt-auto"></div>
                    </div>
                </div>
            ))}
        </div>


    )
}