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
                        <h1 className='heading-edu'>B-TECH(2021-25)</h1>
                        <p className='paragraph'>MVGR College Of Engineering</p>
                        <p className='paragraph'>CGPA-8.14</p>
                    </div>
                    <div>
                        <h1 className='heading-edu'>Intermediate(2019-21)</h1>
                        <p className='paragraph'>Sri Chaitanya Jr College</p>
                        <p className='paragraph'>Percentage - 92.6</p>
                    </div>
                    <div>
                        <h1 className='heading-edu'>10TH(2018-19)</h1>
                        <p className='paragraph'>Marvel School</p>
                        <p className='paragraph'>CGPA-9.5</p>
                    </div>
                </div>
                <div className='second-div'>
                    <img className='image' src='https://cdn.marvel.com/content/1x/ironman2_lob_mas_hlf_01_1.jpg' alt='profile' />
                </div>
            </div>
        </div>
    )
}
