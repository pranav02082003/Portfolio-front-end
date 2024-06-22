import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className='d-flex justify-content-end nav'>
                <ul className='ul-div'>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}><li>Home</li></Link>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/Education"}><li>Education</li></Link>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/About'}><li>About</li></Link>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/Project'}><li>Projects</li></Link>
                </ul>
            </nav>
        </div>
    )
}
