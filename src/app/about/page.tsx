import Styles from "../about/about.module.css";
import React from 'react'
import Link from 'next/link'


const AboutPage = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.header}>This is About Page</h1>
      <ul>
          <li><Link href= "/">Go To Home Page</Link>
          </li>
          <li><Link href = "/contact">Go To Contact Page</Link>
          </li>
          <li><Link href= "/service">Go To Service Page</Link>
          </li>
        </ul>
    </div>
  )
}

export default AboutPage