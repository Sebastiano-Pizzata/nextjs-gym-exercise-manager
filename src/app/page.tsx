import ExercisesCards from "../components/ExercisesCards"
import SelectFilter from "../components/SelectFilter"

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col xl:flex-row gap-8 xl:gap-12">

      {/* Sidebar Filtri */}
      <aside
        className="w-full xl:w-1/4 
               p-6 h-fit
               sticky top-0 z-10">

        <SelectFilter />
      </aside>

      {/* Cards */}
      <main className="flex-1 w-full min-h-screen">
        <ExercisesCards />
      </main>

    </div>



  )
}
