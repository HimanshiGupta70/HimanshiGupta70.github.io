import React, { useContext, useEffect, useState } from 'react'
import styles from "../Styles/projects.module.css"
import image1 from '../Images/max1.png'
import image2 from "../Images/mythressa.png"
// import image3 from "../Images/apple.png"
import image4 from "../Images/fraazo.png"
import image5 from "../Images/banggood.png"
import image6 from "../Images/buffer.png"
import image7 from "../Images/connect.png"


import { AiFillGithub } from 'react-icons/ai';
// import { SiRedux } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaHtml5,FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { SiChakraui,SiRedux,SiExpress } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import Aos from 'aos'
import "aos/dist/aos.css"
import { ScreenContext } from '../screenContext/ScreenContext'


const Projects = () => {
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const {windowDimensions}= useContext(ScreenContext)
  const width=windowDimensions.width

  // console.log(windowDimensions)
  useEffect(()=>{
    
    Aos.init({duration:500})
    
  },[])

  return (
    <div  className={styles.projects} id={"projects"}>
      <h1 
      className={styles.text}>Projects</h1>
      <div className={styles.project_list}>

{/* all projects */}

      <div data-aos={"zoom-in-up"}>
          <img src={image6} alt="buffer" className={styles.heroimg} />
          <div className={styles.project_info}>
          <h2 >Buffer Clone</h2>
          <ul style={{listStyleType:"square"}}>
          <li>This is a full-stack web app</li>
          <li >This is a solo project</li>
          <li >Can be used for Multi users</li>
          <li>Login, signup, delete, filter functionlities are created</li>
          <li> React, Redux, Chakra ui are used used to build this project</li>
          </ul>
          </div>
          
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div
            >
            {/* <DiMongodb/> */}
            <FaNodeJs/>
            <SiExpress/>
            <RiReactjsLine/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/HimanshiGupta70/-gold-tub-6222-BufferingLives" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://cerulean-gingersnap-efb06b.netlify.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div>

      <div data-aos={"zoom-in-up"}>
          <img src={image4} alt="fraazo" className={styles.heroimg}  />
          <div className={styles.project_info}>
          <h2>Fraazo.com Clone</h2>
          <ul style={{listStyleType:"square"}}>
          <li >This is a collaborative project of four members</li>
          <li>Login, signup, filter,sort,cart funtionality are active</li>
          <li>landing page ,Filter and sort functionality are made by me.</li>
          </ul>
          </div>
          
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div
            >
            <RiReactjsLine/>
            <SiRedux/>
            <SiChakraui/>
            </div>
            
          </div>
        
          <div>
          <a href="https://github.com/HimanshiGupta70/calculating-use-926" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="  https://resilient-narwhal-7f4120.netlify.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div>


        <div data-aos={"zoom-in-up"}>
          <img src={image5} alt="banggood" className={styles.heroimg} />
          <div className={styles.project_info}>
          <h2 >banggood.com Clone</h2>
          <ul style={{listStyleType:"square"}}>
          <li>banggood is e-commerce website.</li>
          <li >This is a collaborative Fullstack project of five members.</li>
          <li>Login, signup, delete, filter functionlities are created</li>
          <li>Womens page and filter,sorting function were built by me</li>
          <li>Java Script ,html, css are used to build this project</li>
          </ul>
          </div>
          
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div
            >
            <FaNodeJs/>
            <SiExpress/>
            <DiMongodb/>
            <RiReactjsLine/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/brahmandeepak/7supremacy-masai" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://warm-lollipop-0c0908.netlify.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div>


{/* 
        <div data-aos={"zoom-in-up"}>
          <img src={image7} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
          <h2 >Full stack real time chat application</h2>
          <ul style={{listStyleType:"square"}}>
          <li >This is a solo project which takes almost 3 weeks to create</li>
          <li >Can be used for Multi users by using socket io</li>
          <li>Login, signup, one on one chat and group chat and search functionlities are created</li>
          <li>NodeJS,Express js, MongoDB, Socket io, React, context-api, Chakra ui are used used to build this project</li>
          </ul>
          </div>
          
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div
            >
            <DiMongodb/>
            <FaNodeJs/>
            <SiExpress/>
            <RiReactjsLine/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/amit05c/connect_app" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://dashing-mermaid-36cf23.netlify.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div> */}


        


        {/* <div data-aos={"zoom-in-up"}>
          <img src={image1} alt="max_fashion" className={styles.heroimg}  />
          <div className={styles.project_info}>
          <h2>Max Fashion clone</h2>
          <ul style={{listStyleType:"square"}}>
          <li>Max fashion is an online e-comerce website.</li>
          <li>Total time takes: 5days</li>
          <li>Login, signup, filter,sort,cart funtionality are active</li>
          <li>React, Chakra ui are used used to build this project</li>
          </ul>
          </div>
          
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
            <RiReactjsLine/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/amit05c/chief-shape-6531" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://chief-shape-6531.vercel.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div> */}
{/* 
        <div data-aos={"zoom-in-up"} >
        <img src={image2} alt="mythressa_clone" className={styles.heroimg} />
        <div className={styles.project_info}>
        <h2>Mythresa clone</h2>
        <ul style={{listStyleType:"square"}}>
          <li>It is cloned in construct week project. This is a collaborative project of 5 members.</li>
          <li>Login,signup,Filter,sort,cart,and payment and opt authentication funtionalities are built.</li>
          <li>Html, CSS, Javascript, Bootstrap are used used to build this project</li>
          </ul>
        </div>
          
          
          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
            <FaHtml5/>
            <IoLogoCss3/>
            <IoLogoJavascript/>
            <SiBootstrap/>
            </div>
            
          </div>

          
          <div >
          <a  href="https://github.com/rajpawanku/Mytheresa" target={"_blank"}><button><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://marvelous-torrone-9bbbc5.netlify.app/index.html" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
            
          </div>

        </div> */}
{/* 
        <div data-aos={width>920 ? "flip-up" : ""} >
        <img src={image3} alt="apple_clone" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke", fontWeight:"bolder"}}>Apple cone</h2>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>This is a collaborative project of 5 members. <br>
          </br>
          Login,signup, filter functionality are developed.
          </p>
          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
            <FaHtml5/>
            <IoLogoCss3/>
            <IoLogoJavascript/>
            </div>
            
          </div>
          <div>
          <a href="https://github.com/harshalpatil655/Apple-Clone-Masai" target={"_blank"}><button><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://github.com/harshalpatil655/Apple-Clone-Masai" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects