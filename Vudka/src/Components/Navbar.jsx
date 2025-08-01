import React from 'react'
import { navLinks } from '../../Constant'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export const Navbar =() =>{
 useGSAP(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: 'nav',
      start: 'bottom top'
    }
  });
  
  navTween.fromTo('nav', { backGroundColor: 'transparent'},
    {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut',
    }
  );
 });

  return (
    <nav>
      <div>
        <a href="#home" className='flex items-center gap-2'>
          <img src='/images/logo.png' alt='logo' />
            <p>Vudka Pour</p>
        </a>

        <ul>
            {navLinks.map((link) =>(
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
};
