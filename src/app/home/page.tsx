import Styles from "./home.module.css"
import React from 'react'
import Link from 'next/link'


const HomePage = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.header}>This is Home Page</h1>
      <ul>
          <li><Link href= "/about">Go To About Page</Link>
          </li>
          <li><Link href = "/contact">Go To Contact Page</Link>
          </li>
          <li><Link href= "/service">Go To Service Page</Link>
          </li>
        </ul>
    </div>
  )
}

export default HomePage