import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/footer.css'

import React from 'react'
import Routes from './routes'


import Menu from '../components/navbar'
import About from '../components/about'
import Blog from '../components/blog'
import Project from '../components/project'
import Biography from '../components/biography'
import Form from '../components/form'
import Footer from '../components/footer'

export default props => (
    <div className='container'>
        <Menu/>
        <About/>
        <Blog/>
        <Project/>
        <Biography/>
        <Form/>
        <Footer/>
        {/* <Routes/> */}
    </div>
)