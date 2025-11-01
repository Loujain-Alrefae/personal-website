import { Link } from 'react-router-dom'
import {projects} from '../../assets/js/projects'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
import { useRef } from 'react'

// SliderProject component displays a horizontal scrollable list of projects with navigation arrows
const SliderProject = ({title , dis ,defcolor , arrowleft , areowright , arrowfull , swith }) => {
    const sliderRef = useRef()
    const scrollProjects =(direction)=>{
        // Scroll the slider left or right based on visible card width
        if (sliderRef.current) {
            const cardWidth =sliderRef.current.querySelector('div')?.offsetWidth || 300
            const visibelCards = Math.floor(sliderRef.current.offsetWidth / cardWidth)
            const scrollAmount  = cardWidth * visibelCards + 165
            sliderRef.current.scrollBy({
                left : direction === 'left' ? -scrollAmount : scrollAmount ,
                behavior : 'smooth'
            })
        }
    };
    
    return (
        <div className='mx-5 lg:mx-[70px]'>
            {/* Section header with title and navigation arrows */}
            <div className=' mt-20 mb-14 flex items-center justify-between'>
                <div>
                    <p className=' text-[20px] text-mysecondary font-medium'>{title}</p>
                    <h2 className='text-4xl md:text-[40px] text-myprimary font-semibold dark:text-white'>{dis} <span className=' text-mysecondary'>{defcolor}</span></h2>
                </div>
                {/* Navigation arrows for desktop view */}
                <div className='hidden lg:flex gap-3'>
                    <button onClick={()=>scrollProjects("left")}
                        className=' w-[35px] h-[35px] flex items-center justify-center rounded-[50%] cursor-pointer border border-solid border-mysecondary bg-transparent text-[#A6A6A6] hover:bg-mysecondary hover:text-white'>{arrowleft}</button>
                    <button onClick={()=>scrollProjects("right")}
                        className=' w-[35px] h-[35px] flex items-center justify-center rounded-[50%] cursor-pointer border border-solid border-mysecondary bg-transparent text-[#A6A6A6] hover:bg-mysecondary hover:text-white'>{areowright}</button>
                </div>
            </div>
            {/* Horizontal slider for desktop */}
            <div ref={sliderRef} className=' w-[100%]  mb-[94px] hidden lg:flex relative overflow-hidden gap-14'>
                {projects?.map((p,index) => {
                    return(
                        <div key={index} onClick={() => swith(p.id)} className='w-[100%]  lg:w-[30%] shrink-0 cursor-pointer '>
                            <img src={p.img} alt={p.title} className=' w-[100%]  rounded-[8px] cursor-pointer' />
                            <div className='pt-[32px] flex items-end justify-between '>
                                <div className='text-myprimary dark:text-white '>
                                    <h3 className=' pb-[11px] text-[22px] font-semibold '>{p.title}</h3>
                                    <p>{p.langs}</p>
                                </div>
                                <Link to={p.link} className=' text-mysecondary text-[30px]'><LuCircleArrowOutUpRight /></Link>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            {/* Grid layout for mobile view */}
            <div className='  px-5 mb-[94px] flex flex-wrap justify-between md:justify-around items-center gap-8 lg:hidden '>
                {projects?.map((project , index) => {
                    return(
                        <div key={index} onClick={() => swith(project.id)} className='w-[320px] '>
                            <img src={project.img} alt="project" className=' w-[100%]  rounded-[8px] cursor-pointer'/>
                            <div className='pt-[32px] flex items-end justify-between '>
                                <div className='text-myprimary dark:text-white '>
                                    <h3 className=' pb-[11px] text-[22px] font-semibold '>{project.title}</h3>
                                    <p>{project.langs}</p>
                                </div>
                                <Link to={project.link} className=' text-mysecondary text-[35px]'><LuCircleArrowOutUpRight /></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default SliderProject
