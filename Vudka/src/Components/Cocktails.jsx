import React from 'react'
import { cocktailsList } from '../../Constant/index'


function Cocktails() {
  return (
    <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' />

        <div className="list">
            <div className="popular">
                <h2>Most Populat Vudka Cocktails</h2>

                <ul>
                    {cocktailsList.map((drink) => (
                      <li key={drink.name}>
                        <div className='md:me-28'>
                          <h3>{drink.name}</h3>
                          <p>{drink.country} | {drink.detail}</p>
                        </div>
                        <span>{drink.price}</span>
                      </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails
