"use client"
import { useGlobalContext } from "../context/GlobalContext";
import { daysOfWeek } from "../context/GlobalProvider";

export default function GymTable() {
    const { gymSchedule, removeFromSchedule } = useGlobalContext();

    return (
        <div className="p-4 bg-zinc-900 rounded-xl shadow-lg border border-white/10 w-[80%] mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Gym Weekly Schedule</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-zinc-800">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">Giorno</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">Esercizio</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-100">Azioni</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">
                        {daysOfWeek.map((day) => {
                            const exercises = gymSchedule[day] || [];

                            if (exercises.length === 0) {
                                return (
                                    <tr key={day} className="hover:bg-zinc-800/50 transition-colors">
                                        <td className="px-4 py-2 font-medium text-gray-100">{day}</td>
                                        <td className="px-4 py-2 text-gray-400">Nessun esercizio assegnato.</td>
                                        <td></td>
                                    </tr>
                                );
                            }

                            return exercises.map((exercise, index) => (
                                <tr
                                    key={`${day}-${index}`}
                                    className="hover:bg-zinc-800/50 transition-colors"
                                >
                                    {index === 0 && (
                                        <td className="px-4 py-2 font-medium text-gray-100" rowSpan={exercises.length}>
                                            {day}
                                        </td>
                                    )}

                                    <td className="px-4 py-2 text-gray-100">{exercise}</td>

                                    <td className="px-4 py-2">
                                        <button
                                            className="px-3 py-1 bg-red-600 text-white text-sm 
                                            rounded-full hover:bg-red-500 transition-all shadow-sm
                                            cursor-pointer"

                                            onClick={() => removeFromSchedule(day, index)}
                                        >
                                            Rimuovi
                                        </button>
                                    </td>
                                </tr>
                            ));
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
