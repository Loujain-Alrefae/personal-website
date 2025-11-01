import { useEffect, useRef } from 'react'

// Education component
const Education = ({description , title , section1 , section2 , btn , mode}) => {
    const sectionRef = useRef(null)
    const scrollBtnRef  = useRef(null)

    // Show or hide scroll-to-top button based on visibility of the section
    useEffect(()=>{
        const observer  = new IntersectionObserver(
            ([entry])=>{
                if (scrollBtnRef .current) {
                    scrollBtnRef.current.style.opacity = entry.isIntersecting ? "1" : "0";
                }
            },{ threshold: 0.5 }
        )
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    },[])
    return (
        <div  className=" mb-[165px] relative">
             {/* Decorative background images for large screens */}
            <img src="/assets/image/Images-bg.png" alt="Rectangle and citcles" className=' hidden lg:block absolute top-0 -right-[5%]' />
            <img src="/assets/image/Images-bg.png" alt="Rectangle and citcles" className=' hidden lg:block absolute -bottom-43 -left-[6%] rotate-[180deg] ' />
             {/* Section title and highlighted subtitle */}
            <div className=" mb-[88px] text-left lg:text-center ">
                <p className=" text-[20px] font-medium text-mysecondary">{description}</p>
                <h2 className="text-4xl md:text-[40px] font-semibold text-[#282938] dark:text-white">{title}</h2>
            </div>
            {/* Two vertical timeline blocks with dynamic border styling */}
            <div className="flex flex-col  lg:flex lg:flex-row lg:justify-between ">
                {/* Left timeline block */}
                <div className={`lg:w-[567.8px] relative ${mode ?  "border-section-dark" : "border-section"}`}>
                    {/* Timeline dots */}
                    <div className={` absolute left-[-10px] top-0 w-[20px] h-[20px] rounded-[50%] bg-mysecondary ${mode ?  " outline-2 outline-dashed outline-white" : "outline-2 outline-dashed outline-myprimary"}`}></div>
                    <div className={`absolute left-[-10px] top-[55%] w-[20px] h-[20px] rounded-[50%] bg-mysecondary ${mode ?  " outline-2 outline-dashed outline-white" : "outline-2 outline-dashed outline-myprimary"}`}></div>
                    {/* Content sections */}
                    <div className=" mb-[46px] ml-[70px] ">
                        <h3 className="pb-3.5 text-[25px] font-medium text-[#344054] dark:text-white">{section1}</h3>
                        <p className=" text-[#98A2B3]">I design interactive experiences based on a deep understanding of user behavior, ensuring every detail serves a clear purpose. I combine visual aesthetics with functional logic to build effective interfaces, testing each experience from the user's perspective to ensure smooth navigation. I use Figma to craft interfaces that reflect the project's identity.</p>
                    </div>
                    <div className=" ml-[70px]">
                        <h3 className="pb-3.5 text-[25px] font-medium text-[#344054]  dark:text-white">{section2}</h3>
                        <p className=" text-[#98A2B3]">I develop high-performance interfaces using React and Tailwind, with responsive designs that work efficiently across devices. I use tools like Axios and Vercel to deploy production-ready projects, combining architectural logic with visual detail to deliver a seamless user experience. I develop reusable components to ensure smooth scalability, using modern technologies to enhance performance and stability. </p>
                    </div>
                </div>
                {/* Right timeline block (mirrored structure) */}
                <div className={`mt-9 lg:w-[567.8px] lg:mt-0 relative ${mode ? "border-section-dark": "border-section"}`}>
                    <div className={` absolute -left-[10px] top-0 w-[20px] h-[20px] rounded-[50%] bg-mysecondary ${mode ?  " outline-2 outline-dashed outline-white" : "outline-2 outline-dashed outline-myprimary"}`}></div>
                    <div className={`absolute -left-[10px] top-[55%] w-[20px] h-[20px] rounded-[50%] bg-mysecondary ${mode ?  " outline-2 outline-dashed outline-white" : "outline-2 outline-dashed outline-myprimary"}`}></div>
                    <div className=" mb-[46px] ml-[70px]">
                        <h3 className="pb-3.5 text-[25px] font-medium text-[#344054] dark:text-white">{section1}</h3>
                        <p className=" text-[#98A2B3]">I focus on user experience (UX) through clear interactions and rigorously test every feature before launch. I leverage my strong academic background in Data Structures and Algorithms to inform design decisions, ensuring interfaces are not only beautiful but also highly efficient and scalable.</p>
                    </div>
                    <div className=" ml-[70px]">
                        <h3 className="pb-3.5 text-[25px] font-medium text-[#344054]  dark:text-white">{section2}</h3>
                        <p className=" text-[#98A2B3]">I architect scalable Single Page Applications (SPAs) by developing high-quality, reusable React components, ensuring optimal performance and ease of maintenance. I manage complex state and data flow across the application, integrating Full CRUD and robust Authentication protocols (Sign In/Sign Up). My workflow utilizes Git for version control and streamlined deployment via Vercel, guaranteeing continuous delivery of features.</p>
                    </div>
                </div>
            </div>
            {/* Scroll-to-top button with visibility controlled by IntersectionObserver */}
            <button ref={scrollBtnRef } className=' p-[12.5px] rounded-[12px] absolute right-0 -bottom-[80px] text-white bg-mysecondary text-[25px] shadow-md shadow-black/25 cursor-pointer'
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >{btn}</button>
        </div>
    )
}

export default Education
