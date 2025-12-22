"use client"
import { useGlobalContext } from "../context/GlobalContext";
import { daysOfWeek } from "../context/GlobalProvider";

export default function GymTable() {
    const { gymSchedule, removeFromSchedule } = useGlobalContext();

    return (
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Gym Weekly Schedule</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Giorno</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Esercizio</th>
                            {/* <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Reps</th> */}
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Azioni</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {daysOfWeek.map((day) => {
                            const exercises = gymSchedule[day] || [];

                            if (exercises.length === 0) {
                                return (
                                    <tr key={day}>
                                        <td className="px-4 py-2 font-medium text-gray-700">{day}</td>
                                        <td className="px-4 py-2 text-gray-500" >
                                            Nessun esercizio assegnato.
                                        </td>
                                    </tr>
                                );
                            }

                            return exercises.map((exercise, index) => (
                                <tr key={`${day}-${index}`}>
                                    {index === 0 && (
                                        <td className="px-4 py-2 font-medium text-gray-700" rowSpan={exercises.length}>
                                            {day}
                                        </td>
                                    )}

                                    <td className="px-4 py-2 text-gray-800">
                                        {exercise}
                                    </td>

                                    {/* <td className="px-4 py-2 text-gray-800">
                                        {typeof exercise === "object" && exercise?.reps
                                            ? exercise.reps
                                            : "—"}
                                    </td> */}

                                    <td className="px-4 py-2">
                                        <button
                                            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
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
