import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <div>
            <Header />
            <div className='background'>
                <div>
                    <div className='portfolio-div'>
                        <p className='portfolio'>P R O J E C T S</p>
                    </div>
                    <div>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"https://hospital-management-h3r1.onrender.com/"}><h1 className='heading-edu'>HOSPITAL MANAGEMENT</h1></Link>
                        <p className='paragraph'>Developed an innovative "Hospital Management System " as a web
                            application using MERN stack. Proficiently implemented CRUD
                            operations, establishing a dynamic platform for seamless experiences
                            through auctions.
                        </p>
                    </div>
                    <div>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"https://comparison-front-end.onrender.com"}><h1 className='heading-edu'>Product Price Comparison</h1></Link>
                        <p className='paragraph'>Designed a interactive website "Product Price Comparison" where we stored products in database and an API and compares the price of the same products showcasing my proficiency in MERN stack Web Development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
