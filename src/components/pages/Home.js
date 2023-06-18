import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Richard from '../images/main-richy.jpg'
import '../styles/HomePage.css'
import { FaFacebook, FaLinkedin, FaEnvelope, FaGithub, FaArrowUp, FaArrowCircleDown, FaArrowDown } from 'react-icons/fa'
import Gym from '../images/gym.png'
import Music from '../images/music.png'
import Yoga from '../images/yoga.png'
import Website from '../images/website.png'
import MusicSub from '../images/music-sub.png'
import YogaSub from '../images/yoga-sub.png'
import WebsiteSub from '../images/website-sub.png'
import GymSub from '../images/gym-sub.png'
import MyPdf from '../images/resume.pdf'

const Home = () => {
    const [state, setState] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
        emailjs.sendForm('service_0varput', 'template_01x3twa', form.current, '8OgpSF6yU8NnDQM1y')
            .then((result) => {
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
            });

        e.preventDefault();
        e.target.reset()
    }


    const dropText = () => {
        setState('onclick here and state will be true')
    }

    {/* Gym project mousing codes */ }
    const firstMouseOver = () => {
        document.getElementById('first-img').src = GymSub
        document.getElementById('firstYellow').innerHTML = 'Explore'
        let firstArrow = document.getElementsByClassName('arrow')
        firstArrow[0].style.color = 'red'
    }

    const firstMouseOut = () => {
        document.getElementById('first-img').src = Gym
        document.getElementById('firstYellow').innerHTML = 'Gym Website'
        let firstArrow = document.getElementsByClassName('arrow')
        firstArrow[0].style.color = 'black'
    }


    {/* Music project mousing codes */ }
    const secondMouseOver = () => {
        document.getElementById('second-img').src = MusicSub
        document.getElementById('secondYellow').innerHTML = 'Explore'
        let secondArrow = document.getElementsByClassName('arrow')
        secondArrow[1].style.color = 'red'
    }

    const secondMouseOut = () => {
        document.getElementById('second-img').src = Music
        document.getElementById('secondYellow').innerHTML = 'Music Blog'
        let secondArrow = document.getElementsByClassName('arrow')
        secondArrow[1].style.color = 'black'
    }

    {/* Yoga project mousing codes */ }
    const thirdMouseOver = () => {
        document.getElementById('third-img').src = YogaSub
        document.getElementById('thirdYellow').innerHTML = 'Explore'
        let thirdArrow = document.getElementsByClassName('arrow')
        thirdArrow[2].style.color = 'red'
    }

    const thirdMouseOut = () => {
        document.getElementById('third-img').src = Yoga
        document.getElementById('thirdYellow').innerHTML = 'Yoga Website'
        let thirdArrow = document.getElementsByClassName('arrow')
        thirdArrow[2].style.color = 'black'
    }

    {/* Restaurant project mousing codes */ }
    const fourthMouseOver = () => {
        document.getElementById('fourth-img').src = WebsiteSub
        document.getElementById('fourthYellow').innerHTML = 'Explore'
        let fourthArrow = document.getElementsByClassName('arrow')
        fourthArrow[3].style.color = 'red'
    }

    const fourthMouseOut = () => {
        document.getElementById('fourth-img').src = Website
        document.getElementById('fourthYellow').innerHTML = 'Restaurant Website'
        let fourthArrow = document.getElementsByClassName('arrow')
        fourthArrow[3].style.color = 'black'
    }
 
    return (
        <>
            {/* THE NAVBAR */}
            <nav className="navbar fixed-top navbar-expand-md">
                <div className="container">
                    <a href='#' className="navbar-brand">
                        <span className="fw-bold">
                            RICHARD MARTYNS
                        </span>
                    </a>

                    {/* Toggle button for mobile nav */}
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-nav"
                        aria-controls="main-nav" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* The links that the button will be collapsing */}
                    <div className="collapse navbar-collapse justify-content-end" id="main-nav">
                        <ul className="navbar-nav fw-bold">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact Me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#project" className="nav-link">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <section className='intro-section' id='home' style={{marginTop: '60px'}}>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3 className='display-4 fw-bold'>Frontend Web Developer...</h3>
                            <p className='lead'>My name is Richard Martyns</p>
                            <p className='introduction'>I am a Web Developer with a working proficiency in <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>, <b>JavaScript</b> and <b>react Js</b>. And i also have a background with typescript, i can also render services on Wordpress when needed. I plan to expand my skill set by learning a backend language, i am always ready to learn new things, i would love to work with a team that is truly passionate about what they create and that are consistent</p>

                            <p onClick={dropText} className='fw-bold blue-text'>
                                {state ? <span style={{ color: 'white', fontWeight: 'normal', cursor: 'auto' }}>My goal is to continously grow as a developer while staying current with the latest technologies. I really love what i do and i am looking foward to working with you.</span> : <span>See more ...</span>}
                            </p>
                            <a href={MyPdf} className='btn btn-info btn-lg mt-1 fw-bold'>Resume</a>
                        </div>
                        <div className='col-md-6'>
                            <img src={Richard} alt='Web Developer' className='img-fluid rounded-circle img-thumbnail' />
                        </div>
                    </div>
                </div>
            </section>

            {/* ICON SECTION */}
            <section className='gray-white-section'>
                <div className='container'>
                    <div className='connect text-center'>
                        <h2 className='fw-bold shadow mb-5'>Connect With Me...</h2>
                    </div>
                    <div className='row text-center justify-content-center'>
                        <div className='col-3'>
                            <a href='mailto:richymartyns@gmail.com'>
                                <FaEnvelope className='icons envelope' />
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href='https://github.com/navarad-junior'>
                                <FaGithub className='icons github' />
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href='https://www.linkedin.com/in/richard-martyns/'>
                                <FaLinkedin className='icons linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

            {/* MY SKILLS SECTION */}
            <section className='bg-dark' id='my-skills-section'>
                <div className='container'>
                    <div className='row justify-content-evenly'>
                        <div className='col-12 text-center mb-4'>
                            <h1 className='display-2'>My Skills</h1>
                            <hr />
                        </div>
                        <div className='col-sm-3 text-center'>
                            <h2 id='html'>HTML</h2>
                            <h2 id='css'>CSS</h2>
                            <h2 id='bootstrap'>Bootstrap</h2>
                        </div>
                        <div className='col-sm-3 text-center'>
                            <h2 id='javascript'>JavaScript</h2>
                            <h2 id='react'>react Js</h2>
                            <h2 id='git'>Git</h2>
                            <h2 id='typescript'>Typescript</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* MY ABOUT ME SECTION */}
            <section className='about-section' id='about'>
                <div className='container-fluid'>
                    <div className='about-div mb-4'>
                        <h4 className=' fs-1'>About Me</h4>
                        <FaArrowCircleDown className='ms-3' />
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <div className='card p-4'>
                                <div className='card-body'>
                                    <p>My name is Richard Martyns and I am a front-end web developer with a passion for creating visually appealing and user-friendly websites and applications. I have learned the necessary skills and technologies to excel in the field of front-end web development, including HTML, CSS, JavaScript and various frameworks and libraries. I am passionate about staying up-to-date with the latest web development trends and technologies, and I am always looking to learn new skills and take on new challenges. i would love so much to work with you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* MY PROJECT SECTION */}
            <section className='project-section' id='project'>
                <div className='container-lg'>
                    <div className='text-center'>
                        <h1 className='display-1 mb-5'>
                            Some Projects i built...<FaArrowDown className='down-arrow ms-4' />
                        </h1>
                    </div>
                    <div className='row g-5 align-items-center justify-content-center'>
                        <div className='col-md-5'>
                            <a href='https://navarad-junior.github.io/gym/'>
                                <img onMouseOver={firstMouseOver} onMouseOut={firstMouseOut} src={Gym} className='img-fluid' alt='website sample' id='first-img' />
                            </a>
                            <FaArrowUp className='arrow' />
                            <p id='firstYellow'>Gym Website</p>
                        </div>

                        <div className='col-md-5'>
                            <a href='https://navarad-junior.github.io/music-blog/index1.html'>
                                <img onMouseOver={secondMouseOver} onMouseOut={secondMouseOut} src={Music} className='img-fluid' alt='website sample' id='second-img' />
                            </a>
                            <FaArrowUp className='arrow' />
                            <p id='secondYellow'>Music Blog</p>
                        </div>

                        <div className='col-md-5'>
                            <a href='https://navarad-junior.github.io/Training/Yoga/'>
                                <img onMouseOver={thirdMouseOver} onMouseOut={thirdMouseOut} src={Yoga} className='img-fluid' alt='website sample' id='third-img' />
                            </a>
                            <FaArrowUp className='arrow' />
                            <p id='thirdYellow'>Yoga Website</p>
                        </div>

                        <div className='col-md-5'>
                            <a href='https://navarad-junior.github.io/food-web/RESTURANT/'>
                                <img onMouseOver={fourthMouseOver} onMouseOut={fourthMouseOut} src={Website} className='img-fluid' alt='website sample' id='fourth-img' />
                            </a>
                            <FaArrowUp className='arrow' />
                            <p id='fourthYellow'>Restaurant Website</p>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

            {/* MY CONTACT SECTION */}
            <section className='contact-section' id='contact'>
                <div className='container-lg'>
                    <h1 className='text-center mb-4'>Contact Me</h1>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9'>
                            <div className='card'>
                                <div className='card-body'>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <input type='text' placeholder='Enter your name' className='form-control border-0' name='user_name' required/>
                                        <hr className='ms-2'/>

                                        <input type='email' placeholder='Email Address' className='form-control border-0' name='user_email' required/>
                                        <hr className='ms-2'/>

                                        <input type='text' placeholder='Subject. . .' className='form-control border-0' name='subject' required/>
                                        <hr className='ms-2'/>

                                        <textarea rows='5' placeholder='Please enter your Message. . .' className='form-control border-0' name='message' required></textarea>
                                        <hr className='ms-2' />

                                        <div className='text-center'>
                                            <button type='submit' className='btn btn-secondary fw-bold mx-auto'>Send Me A Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MY FOOTER SECTION */}
            <section className='footer-section bg-light'>
                <div className='container-fluid'>
                    <footer className='text-center'>
                        <p>Hard Coded with react</p>
                        <p>&copy; 2023, My Portfolio</p>
                        <hr />
                    </footer>
                </div>
            </section>

        </>
    )
}

export default Home
