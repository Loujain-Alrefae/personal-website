
// SkillsSection component
const About = ({title , description , mode  }) => {
    // Static list of skills with their proficiency percentages
    const skills = [
        { name: "HTML5", value: 90 },
        { name: "CSS", value: 85 },
        { name: "Javascript", value: 80 },
        { name: "React", value: 90 }
    ]
    return (
        <div  className=' w-[100%] flex justify-center items-center flex-col  lg:flex-row lg:justify-between pt-[50px] mb-[125px] dark:bg-[#1B2431]'> 
            {/* Desktop image block – switches based on light/dark mode */}
            <div className=' relative w-[509.5px] h-[530px] hidden lg:block'>
                {mode ? <img src="/assets/image/section-img.png" alt="languages" /> : <img src="/assets/image/section-img-dark.png" alt="languages"/>}
            </div>
            {/* Text content and skill bars */}
            <div className=' lg:w-[598.7px] relative'>
                <h2 className=' pb-3 font-semibold text-4xl md:text-[40px] text-myprimary dark:text-white'>{title}</h2>
                <p className=' pb-[40.2px]  text-[18px] text-myprimary font-normal dark:text-white'>{description}</p>
                {/* Skill progress bars with labels and indicators */}
                <div >
                    {skills.map(({name , value} , index)=>{
                        return(
                            <div className=" relative">
                                <p className='text-myprimary text-2xl font-semibold dark:text-white'>{name}</p>
                                {/* Percentage indicator bubble */}
                                <span className="w-[33px] h-[20px] flex justify-center items-center rounded-[8px] text-[10px] absolute top-[7px] text-white bg-mysecondary"
                                    style={{
                                        left : `${value}%`,
                                        transform : 'translateX(-74%)'
                                    }}>{value}%
                                </span>
                                {/* Arrow pointer below the bubble */}
                                <div className="w-0 h-0 absolute top-[26px]  border-t-8 border-l-8 border-r-8 border-p-8 border-t-mysecondary border-b-transparent border-r-transparent border-l-transparent  border-solid border-mysecondary"
                                    style={{
                                        left :`${value}%`,
                                        transform : 'translateX(-100%)'
                                    }}
                                ></div>
                                {/* Progress bar styled with gradient */}
                                <input type="range" name={name} min="0" max="100" value={value} readOnly className=' w-[90%] skill-range custom-range-slider rounded-[8px] '
                                    style={{
                                        background: `linear-gradient(to right, #0C96E2 ${value}%, #f3f4f6 ${value}%)`
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Mobile image block – switches based on light/dark mode */}
            <div className=' relative max-w-[100%] h-auto block lg:hidden'>
                {mode ? <img src="/assets/image/section-img.png" alt="languages" /> : <img src="/assets/image/section-img-dark.png" alt="languages"/>}
            </div>
        </div>
    )
}

export default About
