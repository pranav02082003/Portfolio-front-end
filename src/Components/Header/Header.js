import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <nav className='d-flex justify-content-end nav'>
                <ul className='ul-div'>
                    <Link className="nav-link" style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}><li className='list'>Home</li></Link>
                    <Link className="nav-link" style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/Education"}><li className='list'>Education</li></Link>
                    <Link className="nav-link" style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/Project'}><li className='list'>Projects</li></Link>
                    <Link className="nav-link" style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/Contact'}><li className='list'>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}
