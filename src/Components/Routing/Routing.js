import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Education from '../Education/Education'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Education' element={<Education />}></Route>
                    <Route path='/Contact' element={<Contact />}></Route>
                    <Route path='/Project' element={<Project />}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    )
}
