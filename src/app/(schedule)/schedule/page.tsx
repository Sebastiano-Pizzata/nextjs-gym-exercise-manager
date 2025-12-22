export default function Schedule() {
    return (
        <div className="max-w-6xl mx-auto mt-10 px-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl shadow-black/20 p-6 border border-white/10">

                <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
                    Gym Weekly Schedule
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-gray-300 border-b border-white/10">
                                <th className="px-4 py-3 text-left">Giorno</th>
                                <th className="px-4 py-3 text-left">Esercizio</th>
                                <th className="px-4 py-3 text-left">Reps</th>
                                <th className="px-4 py-3 text-center">Azioni</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="hover:bg-white/5 transition-all duration-300 border-b border-white/5">
                                <td className="px-4 py-4 text-gray-100 font-medium">
                                    Lunedì
                                </td>
                                <td className="px-4 py-4 text-gray-300">
                                    Panca Piana
                                </td>
                                <td className="px-4 py-4 text-gray-300">
                                    4 × 10
                                </td>
                                <td className="px-4 py-4 flex justify-center gap-3">
                                    <button
                                        className="
                      px-4 py-2 rounded-full bg-blue-600/80 text-white text-sm font-medium
                      hover:bg-blue-500 hover:scale-105
                      transition-all duration-300
                      shadow-md shadow-blue-900/30
                      active:scale-95
                    "
                                    >
                                        Modifica
                                    </button>

                                    <button
                                        className="
                      px-4 py-2 rounded-full bg-red-600/80 text-white text-sm font-medium
                      hover:bg-red-500 hover:scale-105
                      transition-all duration-300
                      shadow-md shadow-red-900/30
                      active:scale-95
                    "
                                    >
                                        Elimina
                                    </button>
                                </td>
                            </tr>

                            {/* Riga vuota elegante */}
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-4 py-6 text-center text-gray-400 italic"
                                >
                                    Aggiungi esercizi dalla lista
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
