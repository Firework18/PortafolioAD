import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Layout() {
    return (
        <div className='scroll-smooth'>

            <Navbar />

            <Outlet />


        </div>
    )
}
