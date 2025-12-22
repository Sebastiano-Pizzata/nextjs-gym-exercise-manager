import FilterAndCardsWrapper from "../../components/FilterAndCardsWrapper";


export default function Homepage() {
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
        <FilterAndCardsWrapper />
      </div>
    </>

  )
}
