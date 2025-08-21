import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
            <div className="md:col-sapn-8">
                <p className="badge">Best Cocktails</p>
                <h2>
                    Where every details matters <span className='text-white'>-</span>
                    from muddle to garnish
                </h2>
            </div>

            <div className="sub-content">
              <p>We craft each cocktail with precision and passion. From hand-picked
              ingredients to expert techniques, every pour is designed to deliver
              balanced flavor and memorable moments.
              </p>
                <div>
                    <p className='md:text-3xl text-xl font-bold'>
                        <span>4.5</span>5
                    </p>
                    <p className='text-sm text-white-100'>
                        More than 1000+ customers have rated us
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
