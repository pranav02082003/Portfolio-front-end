import React from 'react'
import Header from '../Header/Header'

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
                        <h1 className='heading-edu'>HOSPITAL MANAGEMENT</h1>
                        <p className='paragraph'>Developed an innovative "Hospital Management System " as a web
                            application using MERN stack. Proficiently implemented CRUD
                            operations, establishing a dynamic platform for seamless experiences
                            through auctions.
                        </p>
                    </div>
                    <div>
                        <h1 className='heading-edu'>E-COMMERCE</h1>
                        <p className='paragraph'>Developed a basic "E-commerce" web application using MERN stack
                        showcasing my proficiency in Web Development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
