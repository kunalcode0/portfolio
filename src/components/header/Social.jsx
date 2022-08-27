import React from 'react'
import{FaLinkedinIn} from 'react-icons/fa'
import{BsGithub} from 'react-icons/bs'
import{BsStackOverflow} from 'react-icons/bs'

function Social() {
  return (
  <>
  <div className="Social">
    <a href="https://www.linkedin.com/in/kunal-rajput-354a32213/" target="_blank"><FaLinkedinIn/></a>
    <a href="https://github.com/kunalcode0" target="_blank"><BsGithub/></a>
    <a href="https://stackoverflow.com/users/19845225/kunal-chauhan" target="_blank"><BsStackOverflow/></a>
  </div>

  </>
  )
}

export default Social
