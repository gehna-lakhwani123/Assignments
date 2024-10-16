import Styles from "./web-development.module.css"
import React from 'react'
import Link from 'next/link'

const WebDevelopment = () => {
  return (
    <div>
      <h1>This is our Web Development Page</h1>
      <li><Link href= "/home">Go To Home Page</Link>
          </li>
          <li><Link href = "/about">Go To About Page</Link>
          </li>
          <li><Link href= "/contact">Go To Contact page</Link>
          </li>
          <li><Link href= "/service">Go To Service Page</Link>
          </li>

    </div>
  )
}

export default WebDevelopment