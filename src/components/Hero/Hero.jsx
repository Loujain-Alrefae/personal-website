
const Hero = ({defSize , title , description , btn , mode }) => {
    return (
         // Full-screen container with dynamic border and dark mode support
        <div className={`relative h-screen mt-[116px] w-[100%] dark:bg-darkmode   ${mode ? "borderHeroDark" :"borderHero"}`}>
            {/* Decorative background lines and dot */}
            <img src="/assets/image/Lines.png" alt="Lines" className=' w-full absolute left-0 top-[75px] z-0' />
            <img src="./assets/image/dot.png" alt="dot" className=' absolute left-[50%] top-[100%] -translate-[50%]'/>
            {/* Main content layout: text on left, image on right */}
            <div className=' px-[20px] pt-[14px] lg:px-[70px] lg:flex lg:justify-between relative '>
                <div className=' lg:w-[50%] pt-[125px]  '>
                    {/* Gradient background image behind text */}
                    <img src="/assets/image/Hero.png" alt="gradient colors" className=' absolute top-0 left-0 z-0 '/>
                    {/* Text content: title, description, and button */}
                    <div className=' relative z-3 flex flex-col items-center justify-center text-center lg:items-start lg:text-left'>
                        <h1 className='lg:w-[645.6px] text-4xl sm:text-[55px] font-bold text-myprimary dark:text-white'><span className=' font-normal'>{defSize}</span>{title}</h1>
                        <p className=' md:w-[370px] text-[16px] md:text-[18px] text-[#43495B] pt-2 pb-[30px] dark:text-white'>{description}</p>
                        <a href="/MyCv.pdf" target="_blank" download="Loujan-Alrefae-CV.pdf"><button className=' w-[155px] h-[50px] bg-[#FFFFFF99] rounded-[6px] cursor-pointer text-myprimary dark:text-white dark:bg-[#0C96E299]'>{btn}</button></a>
                    </div>
                </div>
                <div className=' h-[380px] w-[413px] relative hidden lg:block mt-[125px] mr-3 rounded-[50%] bg-[#DFE1FA]  z-0  '>
                    <img src="/assets/image/squers.png" alt="squers" />
                    <div className=" relative  h-[100%] w-[100%] rounded-[50%] bottom-[405px] ">
                        <img src="/assets/image/my-photo.png" alt="my photo"  className=" absolute bottom-[-136px] left-[16px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
