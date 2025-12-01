"use client"
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

export default function ExercisesCards() {
    const { fetchExercises, exercises } = useGlobalContext();

    useEffect(() => {
        fetchExercises()
    }, []);

    return (
        <div>
            <ul>
                {exercises.map((e) => (
                    <li key={e.id}>{e.name}</li>
                ))}
            </ul>
        </div>
    )
}