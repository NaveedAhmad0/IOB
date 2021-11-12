import React from 'react'
import {Button} from "@mui/material"
import './Navbar.css'

const Navbar =()=> { 
    return (
        
        <div className="Navbar">

                <div className="upper">
                <section className="nav">
                    <p><a href="#">Logo</a></p>
                <ul>
                    <li> <a href='#' >Exchange</a></li>
                    <li> <a href='#' >Bridge</a></li>
                    <li> <a href='#' >Contact Us</a></li>
                    <li> <Button className="login"><a href='#'>Log In</a></Button></li>
                    <li> <Button className="sign"><a href='#'>Sign Up</a></Button></li>
                </ul>
                <div className="circle"> </div>

                </section>

                </div>

            
        </div>
    )
}

export default Navbar
