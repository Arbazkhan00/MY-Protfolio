import React from 'react'

const Header = () => {
  return (
    <header className=''>
        <nav className=' flex justify-between p-4'>
            <div>avatar</div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Hire me</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header