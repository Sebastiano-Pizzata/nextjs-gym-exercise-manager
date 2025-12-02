// import { useGlobalContext } from "../context/GlobalContext";

export default function SelectFilter() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl mx-auto mb-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">
                Filtra gli esercizi
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Ordinamento */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-1">Ordina per</label>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    >
                        <option value="">Nessun ordinamento</option>
                        <option value="title_asc">Dalla A alla Z</option>
                        <option value="title_desc">Dalla Z alla A</option>
                    </select>
                </div>

                {/* Categoria */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-1">Categoria</label>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    >
                        <option value="">Tutte</option>
                        <option value="1">Petto</option>
                        <option value="2">Gambe</option>
                        <option value="3">Schiena</option>
                        <option value="4">Spalle</option>
                        <option value="5">Cardio</option>
                    </select>
                </div>

            </div>
        </div>


    )
}