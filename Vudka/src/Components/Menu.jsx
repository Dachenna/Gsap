import gsap from "gsap"
import { sliderLists } from "../../Constant/index"
import { useRef, useState, useCallback } from "react"

const Menu = () => {
  const contentRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalSlides = sliderLists.length

  const goToSlide = useCallback((index) => {
    const newIndex = (index + totalSlides) % totalSlides
    setCurrentIndex(newIndex)
  }, [totalSlides])

  const getCocktailAt = (indexOffset) => {
    return sliderLists[(currentIndex + indexOffset + totalSlides) % totalSlides]
  }

  const currentCocktail = getCocktailAt(0) ?? {}
  const prevCocktail = getCocktailAt(-1) ?? {}
  const nextCocktail = getCocktailAt(1) ?? {}

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Vudka Menu
      </h2>

      <nav className="cocktail-tab" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex

          return (
            <button
              key={cocktail.id ?? index}
              type="button"
              aria-pressed={isActive}
              className={isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          )
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          {/* Previous */}
          <button
            type="button"
            aria-label="Previous cocktail"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name ?? ''}</span>
            <img src="/images/right-arrow.png" alt="" aria-hidden="true" />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next cocktail"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name ?? ''}</span>
            <img src="/images/left-arrow.png" alt="" aria-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image ?? '/images/placeholder.png'}
            className="object-contain"
            alt={currentCocktail.name ?? 'cocktail image'}
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for</p>
            <p id="title">{currentCocktail.name ?? ''}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title ?? currentCocktail.name ?? ''}</h2>
            <p>{currentCocktail.description ?? ''}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
