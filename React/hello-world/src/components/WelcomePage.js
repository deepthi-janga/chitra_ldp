import React from 'react'
import HomePage from './HomePage';
import {Link} from 'react-router-dom'


const WelcomePage =() => {
    return ( 
    <div>
    <h1>This is Welcome Page</h1>
    <Link to = "/BasePage">
           <h1>Navigate back to base Page</h1>
        </Link>
        <Link  to = "/HomePage">
           <h1>Navigate to home Page</h1>
        </Link>
        </div>
    )
}

export default WelcomePage;