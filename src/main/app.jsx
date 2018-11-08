import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/footer.css'
import '../css/style.css'
import '../css/navbar.css'
import '../css/about.css'
import '../css/blog.css'
import '../css/project.css'
import '../css/biography.css'
import '../css/form.css'


import React from 'react'
import Routes from './routes'


import Menu from '../components/navbar'
import About from '../components/about'
import Blog from '../components/blog'
import Project from '../components/project'
import Biography from '../components/biography'
import Form from '../components/form'
import Footer from '../components/footer'

export default props => {
    return (
        <div>
            <Menu />
            <About />
            <Blog />
            <Project />
            <Biography />
            <Form />
            <Footer />
        </div>
    )
}