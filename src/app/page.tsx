import ExercisesCards from "../components/ExercisesCards"
import SelectFilter from "../components/SelectFilter"

export default function Home() {
  return (
    <>
      <div className="banner-container">
        <div className="banner-overlay">
          <div className="banner-content">
            <div className="banner-description">
              <h1>Cerca gli esercizi perfetti per te</h1>
              <p>Scopri gli esercizi ideali per il tuo livello e obiettivi</p>
            </div>
          </div>
        </div>
      </div>
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

    </>

  )
}
