import { Link, useNavigate, useParams } from 'react-router-dom'
import {projects} from '../../assets/js/projects'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
import { useEffect, useState } from 'react'
import SliderProject from '../SliderProject/SliderProject'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { HiArrowsPointingOut } from 'react-icons/hi2'

const ShowProject = ({mode, arrowfull}) => {
    const {id}= useParams()// Get project ID from URL
    const navigate = useNavigate()// Navigation hook for switching projects
    const [zoomed , setZoomed] = useState(false)// Toggle image zoom state
    // Toggle zoom on/off
    const toggleZoom =()=>{
        setZoomed(prev => !prev)
    }
    const [currentProject , setCurrentProject] = useState(null)  // Store selected project data
    // Find project by ID and set it as current
    useEffect(()=>{
        const project = projects?.find((p)=> p.id === id)
        setCurrentProject(project)
    },[id])
    // Switch to another project and update URL
    const handleProjectSwitch = (newProjectId) => {
        const newProject = projects.find(p => p.id === newProjectId);
        setCurrentProject(newProject);
        navigate(`/projects/${newProjectId}`)
        };
    if (!currentProject) return null 
    return (
        <>
        {/* Project details section with responsive layout */}
            <div className={` w-[100%] h-[80%] mt-[116px] pt-[25px] lg:pt-[94px] px-5 lg:px-[70px]  ${mode ? "borderHeroDark" :"borderHero"}`}>
                <div className='pb-[79px] relative flex flex-col gap-7 justify-between lg:flex-row  lg:gap-[43px]  '>
                    <img src="/assets/image/dot.png" alt="dot" className=' absolute -bottom-5 left-[50%] -translate-[50%]'/>
                    {/* Project image with hover overlay and zoom */}
                    <div className='relative w-full lg:basis-1/2 rounded-[8px] overflow-hidden group'>
                        <img src={currentProject.img}  alt={currentProject.title}  className='w-full h-full object-cover rounded-[8px] transition-transform duration-300 group-hover:scale-105'/>
                        <div className='absolute inset-0 bg-black/60 flex justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-3'>
                            <Link onClick={toggleZoom}  className='text-white text-4xl cursor-pointer'><HiArrowsPointingOut/></Link>
                            <Link to={currentProject.link} target="_blank" className='text-white text-3xl cursor-pointer'><LuCircleArrowOutUpRight /></Link>
                        </div>
                        {/* Zoomed image modal */}
                            {zoomed && (
                                <div 
                                    className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
                                    onClick={toggleZoom}
                                >
                                    <img 
                                    src={currentProject.img} 
                                    alt={currentProject.title} 
                                    className="w-[80%] max-h-[80%] object-contain rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                    </div>
                    {/* Project info: title, description, tech stack */}
                    <div className=' flex flex-col gap-[11.22px] lg:basis-1/2'>
                        <h3 className=' text-myprimary font-semibold text-[28px] dark:text-white'>{currentProject.title}</h3>
                        <p className=' text-[16px] dark:text-white'>{currentProject.dis}</p>
                        <p className=' text-[18px] font-medium text-myprimary dark:text-white'>Basic Languages : <span className=' font-normal'>{currentProject.langs}</span></p>
                        <p className=' text-[18px] font-medium text-myprimary dark:text-white'>Framework : <span className=' font-normal'>{currentProject.framework}</span></p>
                        <p className=' text-[18px] font-medium text-myprimary dark:text-white'>Libraries : <span className=' font-normal'>{currentProject.libraries}</span></p>
                        {/* GitHub repository link */}
                        <div className=' mt-[29.5px] flex gap-7 items-center '>
                            <Link to={currentProject.repo} target='_blank' className=' w-[163.47px] h-[51px]  flex justify-center items-center bg-mysecondary text-white rounded-[8px]'>Github Repo</Link>
                        </div>
                    </div>
                
                </div>
            </div>
            {/* SliderProject component for navigating between projects */}
            <SliderProject
                swith = {handleProjectSwitch}
                title="Portfolio"
                dis="The Best "
                defcolor="Projects"
                arrowfull ={<HiArrowsPointingOut />}
                arrowleft ={<MdKeyboardArrowLeft />}
                areowright ={<MdKeyboardArrowRight />}
            />
            
        </>
    )
}

export default ShowProject
