import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <div>
        <ul className='flex gap-10 Bg-gray-600'>
          <li>
            <Link href = "/home" target='_blank'>Home</Link>
          </li>
          <li><Link href ="/about" target='_blank'>About</Link>
          </li>
          <li><Link href = "/contact" target='_blank'>Contact</Link>
          </li>
          <li><Link href = "/service" target='_blank'>Service</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage