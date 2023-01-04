import React, { useEffect } from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Navbar from '../Components/Navbar'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import styles from "../Styles/home.module.css"
import Images from "../Images/himanshi_image.png"
import Contact from './Contact'
import resume from "../Resume/resume.pdf"
import { AiFillGithub } from 'react-icons/ai';
import GithubCalendar from './GithubCalendar'


const Home = () => {
    

  return (
    <div className={styles.home}>
       
        <Navbar/>
        <div className={styles.intro}>
          <div > 
         <img style={{borderRadius:"50%",width:"15em",height:"15em",border:"solid teal"}} className={styles.photo} src={Images} alt="Himanshi photo" />

          </div>
          {/* style={{border: "1px solid green"}} */}
        <div >
          <div>
          <h1 className={styles.text}>Hi, 👋 </h1>
        <h1 className={styles.text}>I am <span className={styles.name}>Himanshi</span></h1>
         <h2 className={styles.text}>Fullstack Developer</h2>
          </div>
        

         <div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
        <a href={resume} download><button className={styles.resume}> Resume</button></a>
         <a className={styles.logo} href="https://github.com/HimanshiGupta70" target={"_blank"}><AiFillGithub/></a>
         
        </div>
        </div>
        
      </div>

        <About />
        <Projects  />
        <Skills />
        <GithubCalendar/>
        <Contact />

        
    </div>
  )
}

export default Home