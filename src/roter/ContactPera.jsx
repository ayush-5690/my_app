import React from 'react'
import { Link } from 'react-router-dom'

function ContactPera() {
  return (
    <div>
      <Link to={"/contact/contact1"}>Contact1</Link>
      <Link to={"/contact/contact2"}>Contact2</Link>
      <h1>Contact</h1>
    </div>
  )
}

export default ContactPera
