"use client";

import { useState } from "react";
import SelectFilter from "./SelectFilter";
import ExercisesCards from "./ExercisesCards";

export default function FiltersAndCardsWrapper() {
    const [start, setStart] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col xl:flex-row w-full">
                {start && (
                    <aside className="w-full xl:w-1/4 p-6 h-fit xl:sticky xl:top-0 z-10">
                        <SelectFilter start={start} />
                    </aside>
                )}

                <main className="flex-1 w-full min-h-screen p-6">
                    <ExercisesCards start={start} setStart={setStart} />
                </main>
            </div>

        </>
    );
}
