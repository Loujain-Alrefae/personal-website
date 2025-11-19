import { Link } from 'react-router-dom'
import {projects} from '../../assets/js/projects'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react'

// SliderProject component displays a horizontal scrollable list of projects with navigation arrows
const SliderProject = ({title , dis ,defcolor , arrowleft , areowright , arrowfull , swith }) => {
    const [current , setCurrent] = useState(0)
    const [slidesPerView , setSlidesPerView] = useState(1)
    useEffect(()=>{
        const handleResize = ()=>{
            if (window.innerWidth < 640) {
                setSlidesPerView(1)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2)
            }else {
                setSlidesPerView(3)
            }
        }
        handleResize()
        window.addEventListener("resize" , handleResize)
        return ()=> window.removeEventListener("resize" , handleResize)
    },[])
    const maxStartPoint = projects.length - slidesPerView
    const slideWidth = 100 / slidesPerView
    const transformValue = current * slideWidth
    const prevSlide =()=>{
        if(current === 0) setCurrent(maxStartPoint)
        else setCurrent(current - 1)
    }
    
    const nextSlide =()=>{
        if(current >= maxStartPoint) setCurrent(0)
        else setCurrent(current + 1)
    }
    return (
        <div className='mx-5 lg:mx-[70px]'>
            {/* Section header with title and navigation arrows */}
            <div className=' mt-20 mb-14 flex items-center justify-between'>
                <div>
                    <p className=' text-[20px] text-mysecondary font-medium'>{title}</p>
                    <h2 className='text-4xl md:text-[40px] text-myprimary font-semibold dark:text-white'>{dis} <span className=' text-mysecondary'>{defcolor}</span></h2>
                </div>
                {/* Navigation arrows for desktop view */}
                <div className='flex gap-3'>
                    <button onClick={prevSlide}
                        className=' w-[35px] h-[35px] flex items-center justify-center rounded-[50%] cursor-pointer border border-solid border-mysecondary bg-transparent text-[#A6A6A6] hover:bg-mysecondary hover:text-white'>{arrowleft}</button>
                    <button onClick={nextSlide}
                        className=' w-[35px] h-[35px] flex items-center justify-center rounded-[50%] cursor-pointer border border-solid border-mysecondary bg-transparent text-[#A6A6A6] hover:bg-mysecondary hover:text-white'>{areowright}</button>
                </div>
            </div>
            {/* Horizontal slider for desktop */}
            <div  className=' w-[100%]  mb-[94px]  relative overflow-hidden  ' 
                >
                <div className=' flex gap-14 transition-transform duration-600 ease-in-out'
                style={{
                    transform : `translateX(-${transformValue}%)`
                }}>
                    {projects?.map((p,index) => {
                        return(
                            <div key={index} onClick={() => swith(p.id)} className='shrink-0 cursor-pointer '
                                style={{
                                    width : `calc(${slideWidth}% - ${3.5}rem)`
                                }}>
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
                
            </div>
        </div>
    )
}


export default SliderProject

