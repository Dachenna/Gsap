import gsap from 'gsap'
import { featureLists, goodLists } from '../../Constant'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const start = isMobile ? 'top 20% ': 'top top';

        const maskedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: true,
                pin: true
            }
        })

        maskedTimeline
        .to('will-fade', {
            
        })
    })

  return (
    <div id='art'>
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The art</h2>

        <div className="content">
            <ul className="space-y-4 will-fade">
                {goodLists.map((items, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <img src="/images/check.png" alt="Check" />
                        <p>{items}</p>
                    </li>
                ))}
            </ul>

            <div className="cocktail-img">
                <img src="/images/under-img.jpg" 
                    alt="cocktail" 
                    className='abs-center masked-img size-full object-contain'/>
            </div>

             <ul className="space-y-4 will-fade">
                {featureLists.map((items, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <img src="/images/check.png" alt="Check" />
                        <p className='md:w-fit w-60'>{items}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div className='masked-container'>
            <h2 className="will-fade">Sip-worthy Euphoria</h2>
            <div id='masked-content'>
                <h3>Made with Craft, Poured with Grace</h3>
                <p>Handcrafted with precision — every pour balances technique, time, and taste.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Art
