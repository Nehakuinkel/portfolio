import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.jpeg';
import IMG2 from '../../assets/2.jpeg';
import IMG3 from '../../assets/3.jpeg';
import IMG4 from '../../assets/4.jpeg';
import IMG5 from '../../assets/5.jpeg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio One',
    github: 'https://github.com/Nehakuinkel',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Two',
    github: 'https://github.com/Nehakuinkel',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Three',
    github: 'https://github.com/Nehakuinkel',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio Four',
    github: 'https://github.com/Nehakuinkel',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Five',
    github: 'https://github.com/Nehakuinkel',
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      {
        data.map(({id,image,title,github}) => {
          return (
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
                <img src={image} alt="Image One" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href= {github} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
    </div>
   </section>
  )
}

export default Portfolio