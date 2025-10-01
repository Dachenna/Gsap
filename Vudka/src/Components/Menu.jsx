import { allCocktails } from "../../Constant/index"
import { useState } from "react"

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  }

  const getCocktailAt = (indexOffset) => {
    return allCocktails[(currentIndex + indexOffset + totalSlides) % totalSlides];
  }

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Vudka Menu
      </h2>
      <nav className="cocktail-tab" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id ?? index}
              type="button"
              className={
                isActive
                  ? 'text-white border-white'
                  : 'text-white/50 border-white/50'
              }
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          )
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          {/* Right arrow */}
          <button type="button" className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>

          {/* Left arrow */}
          <button type="button" className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image || '/images/placeholder.png'}
            className="object-contain"
            alt={currentCocktail.name || ''}
          />
        </div>

        <div className="recipe">
          <div className="info">
            <p>Rec</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
