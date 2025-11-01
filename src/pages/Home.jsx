import { useOutletContext } from 'react-router-dom'
import About from '../components/About/About'
import Direction from '../components/Direction/Direction'
import Hero from '../components/Hero/Hero'
import Education from '../components/Education/Education'
import { IoMdArrowUp } from 'react-icons/io'
import { IoArrowForward, IoLocationOutline } from 'react-icons/io5'
import Opinion from '../components/Opinion/Opinion'
import Contact from '../components/Contact/Contact'
import { LuCircleArrowOutUpRight, LuPhone } from 'react-icons/lu'
import { MdArrowOutward, MdMailOutline } from 'react-icons/md'
import { useRef } from 'react'
import Myprojects from '../components/Myprojects/Myprojects'
import {projects} from '../assets/js/projects'

// Home component renders the full landing page with scrollable sections
const Home = () => {
  const {mode} = useOutletContext()// Get current theme mode from context
  const {sectionRef} = useOutletContext() // Section refs for scroll navigation
  const contactRef = useRef(null)// Ref to scroll to contact section
  return (
    <>
      <div >
        {/* Hero section with intro and CV download */}
        <div ref={sectionRef.Home}>
          <Hero 
            defSize ="HEY! "
            title = "I’m Loujain, Frontend Developer"
            description ="Agency-quality Webflow websites with the personal touch of a freelancer."
            btn ="Download CV"
            mode = {mode}
          />
        </div>
         {/* Direction wrapper applies consistent horizontal spacing */}
        <Direction>
           {/* About section */}
          <div ref={sectionRef.About}>
            <About 
              title = "About Me"
              description ="An aspiring Front End Engineer, specializing in leveraging the React ecosystem to transform complex designs into intuitive, production-ready web interfaces. My focus is on crafting clean, performance-driven, and highly accessible code that integrates architectural logic (Full CRUD/State Management) to deliver exceptional user experiences."
              mode = {mode}
            />
          </div>
           {/* Education & Experience timeline */}
          <div ref={sectionRef.Education}>
            <Education
              description = "Education and Experience"
              title = "Education & Experience"
              section1= "Experince Designer"
              section2 ="Frontend Developer"
              btn = {<IoMdArrowUp />}
              mode = {mode}
            />
          </div>  
           {/* Opinion call-to-action section */}
          <Opinion
            title ="Try me out, risk free!"
            description ="If you're not happy with the design after the first draft, I'll refund your deposit, "
            defSize ="no questions asked"
            btn="Contact"
            icon={<IoArrowForward />}
            onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
          />
          {/* Projects showcase section */}
          <div ref={sectionRef.Projects}>
            <Myprojects
              description ="Portfolio"
              title ="My Creative Works Latest"
              defcolor ="Projects"
              btn ="View Github"
              icon = {<MdArrowOutward />}
              projects ={projects}
              cardIcon = {<LuCircleArrowOutUpRight />}
            />
          </div>
           {/* Contact form section */}
          <div ref={sectionRef.Contact} >
            <Contact
              title = "Contact"
              des ="Let’s Discuss Your"
              defColor =" Project"
              phoneIcon = {<LuPhone />}
              phoneTitle = "Call me"
              mailIcon = {<MdMailOutline />}
              mailTitle = "Email me"
              locationIcon = {<IoLocationOutline />}
              locationTitle = "Address"
              btn = "Send Message"
              contactRef ={contactRef}
            />
          </div>
        </Direction>
      </div>
    </>
  )
}

export default Home
