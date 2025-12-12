"use client";

import { useState } from "react";
import SelectFilter from "./SelectFilter";
import ExercisesCards from "./ExercisesCards";

export default function FiltersAndCardsWrapper() {
    const [start, setStart] = useState<boolean>(false);

    return (
        <>

            {start && (
                <aside className="w-full xl:w-1/4 p-6 h-fit sticky top-0 z-10">
                    <SelectFilter start={start} />
                </aside>
            )}


            <main className="flex-1 w-full min-h-screen">
                <ExercisesCards start={start} setStart={setStart} />
            </main>
        </>
    );
}
