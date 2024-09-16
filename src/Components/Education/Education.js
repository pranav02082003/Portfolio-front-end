import React from 'react'
import './Education.css'
import Header from '../Header/Header'

export default function Education() {
    return (
        <div>
            <Header />
            <div className='background'>

                <div className='first-div'>
                    <div className='portfolio-div'>
                        <p className='portfolio'>E D U C A T I O N</p>
                    </div>
                    <div>
                        <h1 className='heading-edu'>Bachelor Of Technology</h1>
                        <p className='paragraph'>Maharaj Vijayaram Gajapathi Raj College of
                            Engineering (Autonomous)</p>
                        <div className='d-flex'>
                            <span className='paragraph'>2021-25</span>
                            <p className='paragraph'>Vizianagarm , CGPA-8.14</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='heading-edu'>Intermediate</h1>
                        <h2 className='paragraph'>Sri Chaitanya Jr College</h2>
                        <div className='d-flex'>
                            <span className='paragraph'>2019-21</span>
                            <p className='paragraph'>Vskp , Percentage - 92.6</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='heading-edu'>Secondary School</h1>
                        <p className='paragraph'>Marvel School</p>
                        <div className='d-flex'>
                            <span className='paragraph'>2018-19</span>
                            <p className='paragraph'>Vskp , CGPA-9.5</p>
                        </div>
                    </div>
                </div>
                <div className='second-div'>
                    {/* <img className='image' src='https://cdn.marvel.com/content/1x/ironman2_lob_mas_hlf_01_1.jpg' alt='profile' /> */}
                </div>
            </div>
        </div>
    )
}
