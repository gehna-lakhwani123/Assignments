import Styles from "../contact/contact.module.css";
import React from 'react'
import Link from 'next/link'


const ContactPage = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.header}>This is Contact Page</h1>
      <ul>
          <li><Link href= "/">Go To Home Page</Link>
          </li>
          <li><Link href = "/about">Go To About Page</Link>
          </li>
          <li><Link href= "/service">Go To Service Page</Link>
          </li>
        </ul>

    </div>
  )
}

export default ContactPage