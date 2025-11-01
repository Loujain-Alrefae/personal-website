import { Link } from 'react-router-dom'

const Myprojects = ({description , title , defcolor , btn , icon , projects , cardIcon }) => {
    return (
        <div className=' my-[94px]'>
            {/* Header: section title and GitHub button */}
            <div  className=' flex gap-7 flex-col sm:flex-row sm:justify-between sm:items-center'>
                <div className=' w-[340px] sm:w-[370px] '>
                    <p className=' text-[20px] text-mysecondary font-medium'>{description}</p>
                    <h2 className='text-4xl md:text-[40px] text-myprimary font-semibold dark:text-white'>{title} <span className=' text-mysecondary'>{defcolor}</span></h2>
                </div>
                {/* GitHub profile button */}
                <Link to="https://github.com/Loujain-Alrefae" target='_blank' className=' w-[163.4px] h-[50px] flex justify-center gap-2 items-center cursor-pointer bg-mysecondary text-white rounded-[8px] '>{btn} {icon}</Link>
            </div>
            {/* Project cards  */}
            <div className=' pt-14  flex flex-wrap justify-between sm:justify-around items-center gap-8 '>
                {projects?.map((project , index) => {
                    return(
                        <div key={index} className='w-[320px] md:w-[370px]'>
                            {/* Project image with external link */}
                            <Link to={project.link} target='_blank'><img src={project.img} alt="project" className=' w-[100%]  rounded-[8px] cursor-pointer' /></Link>
                            {/* Project title, tech stack, and internal link */}
                            <div className='pt-[32px] flex items-end justify-between '>
                                <div className='text-myprimary dark:text-white '>
                                    <h3 className=' pb-[11px] text-[22px] font-semibold '>{project.title}</h3>
                                    <p>{project.langs}</p>
                                </div>
                                <Link to={`/projects/${project.id}`} className=' text-mysecondary text-[35px]'>{cardIcon}</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Myprojects
