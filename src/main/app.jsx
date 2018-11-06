import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Routes from './routes'


import Menu from '../components/navbar'
import About from '../components/about'



export default props => (
    <div className='container'>
        <Menu/>
        <About/>
        {/* <Routes/> */}
    </div>
)