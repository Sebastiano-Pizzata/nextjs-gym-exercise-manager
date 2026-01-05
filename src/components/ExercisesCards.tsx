"use client";

import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import StartButton from "./StartButton";
import {
    daysOfWeek,
    type DayOfWeek,
    type Exercise,
    type ExercisesCardsProps
} from "../context/GlobalProvider";

export default function ExercisesCards({ start, setStart }: ExercisesCardsProps) {
    const { fetchExercises, sortAndFilteredEx, addToSchedule } = useGlobalContext();

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [selectedDays, setSelectedDays] = useState<{ [key: string]: DayOfWeek | "" }>({});

    const itemsPerPage = 6;

    useEffect(() => {
        fetchExercises();
    }, [fetchExercises]);

    useEffect(() => {
        setCurrentPage(0);
    }, [sortAndFilteredEx]);

    const totalPages = Math.ceil(sortAndFilteredEx.length / itemsPerPage);

    const currentItems: Exercise[] = sortAndFilteredEx.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const goNext = () => {
        if (!start || totalPages === 0) return;
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentPage(prev => (prev + 1) % totalPages);
            setIsAnimating(false);
        }, 100);
    };

    const goPrev = () => {
        if (!start || totalPages === 0) return;
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
            setIsAnimating(false);
        }, 100);
    };

    const handleSelectDay = (exName: string, day: DayOfWeek) => {
        setSelectedDays(prev => ({ ...prev, [exName]: day }));
    };

    const handleAdd = (exerciseName: string) => {
        const day = selectedDays[exerciseName];
        if (day) {
            addToSchedule(day, exerciseName);
            setSelectedDays(prev => ({ ...prev, [exerciseName]: "" }));
        }
    };

    if (sortAndFilteredEx.length === 0) {
        return <p className="text-center text-gray-500 mt-6">Nessun esercizio trovato.</p>;
    }

    return (
        <div className="w-full">

            {!start && (
                <div className="flex justify-center py-8">
                    <StartButton onStart={() => setStart(true)} />
                </div>
            )}

            {start && (
                <div className="flex items-center justify-between gap-4 ">
                    {/* PULSANTE PREV */}
                    {totalPages > 1 && (
                        <button
                            onClick={goPrev}
                            className="
                                text-white p-4 rounded-full 
                                shadow-lg shadow-blue-900/40 
                                hover:bg-white/20 hover:shadow-blue-500/50
                                transition-all duration-300 
                                cursor-pointer hover:scale-110 active:scale-95
                                flex-shrink-0
                            "
                        >
                            <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
                        </button>
                    )}

                    {/* GRID CARDS */}
                    <div className="flex-1">
                        <div
                            className={`
                                grid grid-cols-1 sm:grid-cols-3 gap-8
                                transition-all duration-300 ease-out
                                ${isAnimating ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"}
                            `}
                        >
                            {currentItems.map((e) => (
                                <div
                                    key={e.name}
                                    className="
                                        w-full h-80 bg-zinc-900 rounded-xl overflow-hidden flex flex-col
                                        border border-white/10 shadow-lg
                                        transition-all duration-300 hover:scale-[1.03]
                                        hover:shadow-2xl hover:border-white/20
                                    "
                                >
                                    <div className="w-full h-56 overflow-hidden">
                                        <img
                                            src={e.image}
                                            alt={e.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold text-gray-100 line-clamp-1 title-font">
                                            {e.name}
                                        </h3>
                                    </div>

                                    <div className="flex flex-col xl:flex-row px-3 pb-4 gap-2">
                                        <select
                                            value={selectedDays[e.name] || ""}
                                            onChange={(event) =>
                                                daysOfWeek.includes(event.target.value as DayOfWeek) &&
                                                handleSelectDay(e.name, event.target.value as DayOfWeek)
                                            }
                                            className="
                                                w-full text-sm border border-white/20 rounded-lg
                                                px-3 py-2 bg-zinc-800 text-gray-100
                                                focus:ring-2 focus:ring-blue-500/50
                                            "
                                        >
                                            <option value="">Seleziona giorno</option>
                                            {daysOfWeek.map(day => (
                                                <option key={day} value={day}>{day}</option>
                                            ))}
                                        </select>

                                        <button
                                            onClick={() => handleAdd(e.name)}
                                            className="
                                                w-full text-sm px-4 py-2 rounded-full
                                                bg-blue-600 text-white font-medium
                                                hover:bg-blue-500 transition-all
                                                active:scale-95
                                            "
                                        >
                                            Aggiungi
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PULSANTE NEXT */}
                    {totalPages > 1 && (
                        <button
                            onClick={goNext}
                            className="
                                text-white p-4 rounded-full 
                                shadow-lg shadow-blue-900/40 
                                hover:bg-white/20 hover:shadow-blue-500/50
                                transition-all duration-300 
                                cursor-pointer hover:scale-110 active:scale-95
                                flex-shrink-0
                            "
                        >
                            <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
