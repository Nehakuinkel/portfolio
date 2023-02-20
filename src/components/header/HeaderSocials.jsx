import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/neha-sharma-0b8a13196/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Nehakuinkel" target="_blank"><FaGithub/></a>
       </div>
  )
}

export default HeaderSocials