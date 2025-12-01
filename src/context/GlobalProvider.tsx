"use client";
import { useState } from "react";
import { GlobalContext } from "./GlobalContext";


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

};

type GlobalProviderProps = {
    children: React.ReactNode;
};

const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [exercises, setExercises] = useState<Exercise[]>([]);

    const url = process.env.NEXT_PUBLIC_ENDPOINT_URL;

    const fetchExercises = async () => {
        try {
            const response = await fetch(url);
            console.log("Status:", response.status);
            const data = await response.json();
            setExercises(data);
        } catch (error) {
            console.error("Errore nel fetch degli esercizi:", error);
        }
    };


    const value: GlobalContextType = {
        exercises,
        fetchExercises
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;


