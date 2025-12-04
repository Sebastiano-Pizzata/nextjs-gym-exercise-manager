"use client";
import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useMemo } from "react";


export type Exercise = {
    id: number;
    name: string;
    description: string;
    image: string;
    category_id: number;
    type_id: number;
}



export type GlobalContextType = {
    exercises: Exercise[];
    fetchExercises: () => Promise<void>;
    handleSort: (value: string) => void;
    setCategory: React.Dispatch<React.SetStateAction<number>>;
    sortAndFilteredEx: Exercise[];
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchExercise: Exercise[];
};




type GlobalProviderProps = {
    children: React.ReactNode;
};




const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState(1);
    const [category, setCategory] = useState(0);
    const [search, setSearch] = useState("");

    const url = process.env.NEXT_PUBLIC_ENDPOINT_URL;

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



    const handleSort = (value: string) => {
        if (value === 'title_asc') {
            setSortBy('title');
            setSortOrder(1);
        } else if (value === 'title_desc') {
            setSortBy('title')
            setSortOrder(-1)
        } else {
            setSortBy('')
            setSortOrder(0)
        }
    }

    const sortAndFilteredEx = useMemo(() => {
        let filtered = [...exercises];
        if (category) filtered = filtered.filter(ex => ex.category_id === category);
        if (sortBy === 'title') filtered.sort((a, b) => a.name.localeCompare(b.name) * sortOrder)
        return filtered
    }, [exercises, category, sortBy, sortOrder]);


    const searchExercise = useMemo(() => {
        if (!search.trim()) return exercises;

        return exercises.filter(exercise =>
            exercise.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, exercises]);


    const value: GlobalContextType = {
        exercises,
        fetchExercises,
        handleSort,
        setCategory,
        sortAndFilteredEx,
        search,
        setSearch,
        searchExercise
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;


