import { FaBars, FaLinkedinIn, FaMoon } from 'react-icons/fa'
import NavBar from '../components/NavBar/NavBar'
import { MdSunny } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { ImFacebook } from 'react-icons/im'
import { IoLogoInstagram, IoMdClose } from 'react-icons/io'

// Root component sets up global layout, theme mode, and shared section refs
const Root = () => {
    // Load theme mode from localStorage (dark or light)
    const[mode , setMode]=useState(()=>{
        const savedMode = localStorage.getItem("mode");
        return savedMode === "true";
    })
    // Save theme mode to localStorage whenever it changes
    useEffect(()=>{
        localStorage.setItem("mode" , JSON.stringify(mode))
    },[mode])
    // Navigation items and their corresponding section keys
    const items=[
        {label : "Home" , key : "Home"},
        {label : "About me" , key : "About"},
        {label : "Education" , key : "Education"},
        {label : "Projects" , key : "Projects"},
        {label : "Contact" , key : "Contact"},
    ]
    // Refs for scrollable sections
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const educationRef = useRef(null)
    const opinionRef = useRef(null)
    const projectsRef =useRef(null) 
    const contactRef = useRef(null)
    // Group all section refs into a single object
    const sectionRef={
        Home : homeRef,
        About : aboutRef ,
        Education :educationRef,
        Projects : projectsRef ,
        Contact :contactRef ,
    }

    return (
        // Apply dark mode class conditionally
        <div className={`dark:bg-darkmode ${mode ? "dark" : ""}`}>
            {/* Navigation bar with theme toggle and scroll links */}
            <NavBar
                name="Loujain"
                items ={items}
                moonIcon = {<FaMoon />}
                barsIcon ={<FaBars />}
                closeIcon={<IoMdClose />}
                sunIcon ={<MdSunny />}
                setMode ={setMode}
                mode ={mode}
                sectionRef={sectionRef}
            />
            {/* Render nested routes and pass shared context */}
            <Outlet context={{ mode , sectionRef}}/>
            {/* Footer with social icons and credits */}
            <Footer
                copyright = "@ 2025. All Rights Reserved"
                owner ="Develpoment by Loujain"
                facebookIcon={<ImFacebook />}
                instagramIcon={<IoLogoInstagram />}
                linkedinIcon={<FaLinkedinIn />}
            />
        </div>
    )
}

export default Root
