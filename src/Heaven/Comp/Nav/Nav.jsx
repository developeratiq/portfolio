import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa';
import Login from '../MainBody/Login';

function Nav() {
 
    const [open, setOpen] = useState(false)
    const openLogin = () => {
        setOpen(!open)
    }
    return (
        <>
            <header style={{ background: "grey" }} >
                <div class="navContainer" >
                    <div className='headlogo'>
                        <h2>HPS</h2>
                    </div>
                    <nav>
                        <ul>
                            <li> <Link to={'/'} > Home </Link> </li>
                            <li>  About
                                <ul class="drop-down">
                                    <li> <Link to='/about' > Portfolio </Link> </li>
                                    <li> <Link to='/class'> Classes </Link> </li>
                                </ul>
                            </li>
                            <li> <Link to={'/gallery'} > Gallery </Link> </li>
                            <li>  Services
                                <ul class="drop-down">
                                    <li><Link to={'/portfolio'} > PortFolio</Link> </li>
                                    <li> <Link to='/' target="_blank" > Teams </Link> </li>
                                    <li> <a href="https://www.youtube.com/playlist?list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc" target="_blank" > Portfolio </a> </li>
                                    <li> <a href="#" target="_blank" > Teams </a> </li>
                                </ul>
                            </li>
                            <li> <a href="#" target="_blank" > Contact </a> </li>
                            <li> <Link > <FaRegUserCircle onClick={openLogin} />  </Link></li>
                        </ul>

                    </nav>
                </div>
            </header>

            {open&&<Login/>}


        </>
    )
}

export default Nav