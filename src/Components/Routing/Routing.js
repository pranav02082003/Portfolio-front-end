import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Education from '../Education/Education'
import About from '../About/About'
import Project from '../Project/Project'

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Education' element={<Education />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/Project' element={<Project />}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    )
}
