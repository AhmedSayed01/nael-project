import React from 'react'
import './Home.css'
import Work from '../Work/Work'
import Typed from 'react-typed'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
const Home = () => {
    return (
        <div >
            <div className='container'>
                <div className='home-info'>
                    <Typed
                        strings={[
                            'Crave Beauty',
                            'Capture Moments'
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                        style={{ fontSize: '2.9rem', color: '#0E2337', fontWeight: 'bold' }}
                    />
                    <p>In the dance of creativity, <br />ideas and imagination intertwine, <br />giving birth to Reel-world wonders. </p>
                    <button><h1>Explore</h1> <span><BsFillArrowRightCircleFill /></span></button>
                </div>
                <div className='blob'>
                    <div className='box1'></div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <Work />
            </div>
        </div>
    )
}

export default Home