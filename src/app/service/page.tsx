import Styles from "../service/service.module.css";
import React from 'react'
import Link from 'next/link'


const ServicePage = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.header}>This is Service Page</h1>
      <ul>
          <li><Link href= "/">Go To Home Page</Link>
          </li>
          <li><Link href = "/about">Go To About Page</Link>
          </li>
          <li><Link href= "/contact">Go To Contact page</Link>
          </li>
          <li><Link href= "/service/web-development">Go To Web-Development Page</Link>
          </li>
        </ul>

    </div>
  )
}

export default ServicePage