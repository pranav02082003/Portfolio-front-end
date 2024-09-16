import React from 'react'
import './Home.css'
import Header from '../Header/Header'

export default function Home() {
    return (
        <div>
            <Header />
            <div className='main-div'>
                <div>
                    <div className='portfolio-div'>
                        <p className='portfolio'>P O R T F O L I O</p>
                    </div>
                    <div>
                        <div className='heading-div'>
                            <h1 className='heading'>PRANAV</h1>
                        </div>
                        <div className='heading-div'>
                            <h1 className='heading'>DUNNA</h1>
                        </div>
                    </div>
                    <div className='portfolio-div'>
                        <p className='paragraph'>Passionate and energetic final-year B-Tech Computer Science student. Quick to grasp new concepts and
                            apply them effectively. Strong problem-solving and analytical skills, complemented by excellent
                            teamwork and communication abilities. Seeking opportunities to enhance skills and contribute to
                            impactful projects in the tech industry</p>

                    </div>
                    <div className='button'>
                        <a href="https://drive.google.com/file/d/12LHcYBlSMWkotqysqPUgC0xBTn5lhsaQ/view?usp=drive_link" target='_blank' rel='noopener noreferrer'><button type="button" class="btn btn-info">View Resume</button></a>
                    </div>
                </div>
                <div>
                    {/* <img className='img' src='https://cdn.marvel.com/content/1x/ironman2_lob_mas_hlf_01_1.jpg' alt='profile' /> */}
                </div>

            </div>

        </div>
    )
}
