import React from 'react'
import {Link} from 'react-router-dom'
import WelcomePage from './WelcomePage.js';

const HomePage =() => {
return ( 
    <div>
<h1>This is Home Page</h1>
<Link to = "/BasePage">
       <h1>Navigate back to Base Page</h1>
    </Link>
    <Link  to = "/WelcomePage">
       <h1>Navigate to Welcome Page</h1>
    </Link>
    </div>
);
}



export default HomePage;