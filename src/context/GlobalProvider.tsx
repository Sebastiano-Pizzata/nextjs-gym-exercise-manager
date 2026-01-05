"use client";
import { useState, useMemo, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export type Exercise = {
    id: number;
    name: string;
    description: string;
    image: string;
    category_id: number;
    type_id: number;
}

export type ExercisesCardsProps = {
    start: boolean;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DayOfWeek =
    | 'Lunedì'
    | 'Martedì'
    | 'Mercoledì'
    | 'Giovedì'
    | 'Venerdì'
    | 'Sabato'
    | 'Domenica';

export type GymSchedule = {
    [key in DayOfWeek]: string[];
};

export type GlobalContextType = {
    exercises: Exercise[];
    fetchExercises: () => Promise<void>;
    fetchSingleEx: (id: number) => Promise<void>;
    handleSort: (value: string) => void;
    setCategory: React.Dispatch<React.SetStateAction<number>>;
    sortAndFilteredEx: Exercise[];
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchExercise: Exercise[];
    gymSchedule: GymSchedule;
    addToSchedule: (day: DayOfWeek, exName: string) => void;
    removeFromSchedule: (day: DayOfWeek, index: number) => void;
};

type GlobalProviderProps = {
    children: React.ReactNode;
};

export const daysOfWeek: DayOfWeek[] = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];


const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [singleEx, setSingleEx] = useState<Exercise | null>(null);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState(1);
    const [category, setCategory] = useState(0);
    const [search, setSearch] = useState("");

    const fetchExercises = async () => {
        try {
            const response = await fetch("http://localhost:2000/exercise");
            console.log("Status:", response.status);
            const data = await response.json();
            setExercises(data);
        } catch (error) {
            console.error("Errore nel fetch degli esercizi:", error);
        }
    };

    const fetchSingleEx = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:2000/exercise/${id}`);
            console.log("Status:", response.status);
            const data = await response.json();
            setSingleEx(data);
        } catch (error) {
            console.error("Errore nel fetch del singolo esercizio:", error);
        }
    }

    const handleSort = (value: string) => {
        if (value === 'title_asc') {
            setSortBy('title');
            setSortOrder(1);
        } else if (value === 'title_desc') {
            setSortBy('title');
            setSortOrder(-1);
        } else {
            setSortBy('');
            setSortOrder(0);
        }
    }

    const sortAndFilteredEx = useMemo(() => {
        let filtered = [...exercises];
        if (category) filtered = filtered.filter(ex => ex.category_id === category);
        if (sortBy === 'title') filtered.sort((a, b) => a.name.localeCompare(b.name) * sortOrder);
        return filtered;
    }, [exercises, category, sortBy, sortOrder]);

    const searchExercise = useMemo(() => {
        if (!search.trim()) return exercises;

        return exercises.filter(exercise =>
            exercise.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, exercises]);

    const [gymSchedule, setGymSchedule] = useState<GymSchedule>({
        Lunedì: [],
        Martedì: [],
        Mercoledì: [],
        Giovedì: [],
        Venerdì: [],
        Sabato: [],
        Domenica: [],
    });

    useEffect(() => {
        const saved = localStorage.getItem("gymScheduler");
        if (saved) {
            setGymSchedule(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("gymScheduler", JSON.stringify(gymSchedule));
    }, [gymSchedule]);

    const addToSchedule = (day: DayOfWeek, exName: string) => {
        setGymSchedule(prev => ({
            ...prev,
            [day]: [...prev[day], exName],
        }));
    }

    const removeFromSchedule = (day: DayOfWeek, index: number) => {
        setGymSchedule(prev => ({
            ...prev,
            [day]: prev[day].filter((_, i) => i !== index)
        }))
    }

    const value: GlobalContextType = {
        exercises,
        fetchExercises,
        fetchSingleEx,
        handleSort,
        setCategory,
        sortAndFilteredEx,
        search,
        setSearch,
        searchExercise,
        gymSchedule,
        addToSchedule,
        removeFromSchedule
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
