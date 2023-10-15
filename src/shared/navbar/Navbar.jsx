import React, { useState } from 'react'
import './Navbar.css';
// import { AiFillHome } from 'react-icons/ai';
import { RiHome7Fill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
// import { MdWork } from 'react-icons/md';
// import { RiHandCoinFill } from 'react-icons/ri';
import { PiShareNetworkFill } from 'react-icons/pi';
import { LuMenu } from 'react-icons/lu';
import logo from '../.././assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [hamUl, setHamUl] = useState(true);
    const navigate = useNavigate();
    return (
        <div>
            <nav className='navbar'>
                <section>
                    <img className='logo' src={logo} alt="" />
                </section>
                <section className='navbar-ul-section'>
                    <button className='ham' onClick={() => setHamUl(!hamUl)}><LuMenu /></button>
                    <ul className={hamUl ? 'navbar-ul' : 'navbar-ulOpen'}>
                        <li>
                            <div class='nav-buttons'>
                                <button onClick={() => navigate("/")}><RiHome7Fill /></button>
                            </div>
                            <div>
                                <h3>Home</h3>
                            </div>
                        </li>
                        <li>
                            <div class='nav-buttons'>
                                <button onClick={() => navigate("/about")}><BsFillPersonFill /></button>
                            </div>
                            <div>
                                <h3>About</h3>
                            </div>
                        </li>
                        {/* <li>
                            <div class='nav-buttons'>
                                <button onClick={() => navigate("/work")}><MdWork /></button>
                            </div>
                            <div>
                                <h3>Work</h3>
                            </div>
                        </li> */}
                        {/* <li>
                            <div class='nav-buttons'>
                                <button onClick={() => navigate("/clients")}><RiHandCoinFill /></button>
                            </div>
                            <div>
                                <h3>Clients</h3>
                            </div>
                        </li> */}
                        <li>
                            <div class='nav-buttons'>
                                <button onClick={() => navigate("/contact")}><PiShareNetworkFill /></button>
                            </div>
                            <div>
                                <h3>Contact</h3>
                            </div>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    )
}

export default Navbar