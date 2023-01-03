import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    // const navLinkCSS = ({ isActive }) => {
    //     return {
    //         fontSize: isActive ? '23px' : '20px',
    //         color: isActive ? 'red' : 'green'

    //     }
    // }


    return (
        <div>
            <nav className='Main-nav'>
                <NavLink  to='/'>Home</NavLink>
                <NavLink  to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink  to='/products'>Product</NavLink>
                <NavLink  to='/users'>Users</NavLink>
            </nav>
        </div>

        // in this div style is change by javaScript
        // <div>
        //     <nav className='Main-nav'>
        //         <NavLink style={navLinkCSS} to='/'>Home</NavLink>
        //         <NavLink style={navLinkCSS} to='/about'>About</NavLink>
        //         <NavLink style={navLinkCSS} to='/contact'>Contact</NavLink>
        //         <NavLink style={navLinkCSS} to='/products'>Product</NavLink>
        //         <NavLink style={navLinkCSS} to='/users'>Users</NavLink>
        //     </nav>
        // </div>
    )
}

export default Navigation