import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({name , items , moonIcon , barsIcon , setMode ,mode ,sunIcon , closeIcon, sectionRef}) => {
    const [show , setShow] = useState(false)// Toggle mobile menu visibility
    const [activeSection , setActiveSection]= useState(null) // Track currently active section
    // Toggle menu open/close
    const showMenu = () => {
        setShow(!show)
    }
    const scrollToSection = (sectionName)=>{
        const ref = sectionRef[sectionName]
        if (ref?.current) {
            ref.current.scrollIntoView({behavior : 'smooth'})// Smooth scroll to section
        }
        setShow(false)// Close mobile menu after click
    }
    // Highlight active section based on scroll position
    useEffect(()=>{
        const handleScroll =()=>{
            const scrollY= window.scrollY +116
            for(const [name, ref] of Object.entries(sectionRef)) {
                const offsetTop = ref?.current?.offsetTop
                if (scrollY >= offsetTop) {
                    setActiveSection(name)
                }
            }
        }
        window.addEventListener("scroll" , handleScroll)
        return ()=>window.removeEventListener('scroll' , handleScroll)
    },[sectionRef])
    return (
    <>
    {/* Top navigation bar */}
        <nav className=' w-[100%] h-[116px] fixed top-0 left-0 z-10 px-[20px] lg:px-[70px] py-10  flex justify-between items-center text-myprimary bg-white dark:bg-[#1B2431] dark:text-white'>
            <p className=' text-2xl font-semibold '>{name}</p>
            {/* Desktop navigation links */}
            <div className={`hidden lg:flex lg:gap-6 lg:font-medium `}>
                {items?.map(({ label, key } , index)=>{
                return (
                    <Link to="/" onClick={()=>scrollToSection(key)} className={`hover:text-[#0C96E2] cursor-pointer  ${activeSection == key ? "text-mysecondary" : "text-myprimary dark:text-white"}`}  key={index}>{label}</Link>
                )
            })}
            </div>
            {/* Theme toggle button (light/dark) */}
            <button className=' text-3xl text-myprimary dark:text-[#FFFFFF] cursor-pointer' onClick={() => setMode(prev => !prev)} >{mode ? sunIcon : moonIcon }</button>
            {/* Mobile menu toggle button */}
            <button onClick={showMenu} className=' lg:hidden cursor-pointer text-3xl text-myprimary dark:text-[#FFFFFF]'>{show ? closeIcon : barsIcon}</button>
        </nav>
        {/* Mobile menu drawer */}
        <div className={`${show ? "opacity-100 translate-x-0" : "translate-x-[-100%]"} px-[20px] fixed top-[116px] left-0 w-screen h-screen z-5 flex flex-col gap-6 items-center bg-white dark:bg-[#1B2431] dark:text-white transition-transform ease-in-out duration-500 `}>
                {items?.map(( {label, key } , index)=>{
                return (
                    <Link to="/" onClick={()=>scrollToSection(key)} className={`py-5 w-[100%] text-center hover:bg-[#c7c7c726] hover:text-mysecondary `}  key={index}>{label}</Link>
                )
            })}
        </div>
    </>
    )
}

export default NavBar
