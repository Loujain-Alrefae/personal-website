import { useOutletContext } from 'react-router-dom'
import ShowProject from '../components/ShowProject/ShowProject'


const Projects = () => {
    const {mode} = useOutletContext()// Get theme mode from parent layout
    return (
        <>
        {/* Render detailed project view */}
            <ShowProject mode={mode} />
        </>
        
    )
}

export default Projects
