import React from 'react'
import './about.css'
import ME from '../../assets/pic.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {BsFillFolderFill} from 'react-icons/bs'

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <img src={ME} alt="About Image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ years Experience</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <BsFillFolderFill className='about_icon'/>
              <h5>Projects</h5>
              <small>88+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ea quasi repellat architecto placeat deleniti quos nemo ipsam quaerat dolorem autem vel iusto necessitatibus impedit, illum at cum qui laudantium!

          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About