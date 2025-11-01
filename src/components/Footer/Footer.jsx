import { Link } from 'react-router-dom'

// Footer component
const Footer = ({copyright , owner , facebookIcon , instagramIcon , linkedinIcon}) => {
    return (
        // Main footer container with responsive padding and layout
        <div className='mx-[20px] lg:mx-[68px] pb-9 pt-7 sm:pb-12 sm:pt-9 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center border-t border-solid border-[#BEC0BF] dark:bg-darkmode dark:text-[#FFFFFF]'>
            <p className=' text-myprimary dark:text-[#FFFFFF]'>{copyright}</p>
            <p className=' text-myprimary dark:text-[#FFFFFF]'>{owner}</p>
            {/* Social media icons with hover effects */}
            <div className=' flex gap-[16.14px]'>
                <Link to='https://www.facebook.com/share/16aMWgmxrx/' target='_blank' className=' w-[30px] h-[30px] flex justify-center items-center rounded-[50%] bg-mysecondary text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-mysecondary dark:hover:bg-darkmode'>{facebookIcon}</Link>
                <Link to='https://www.instagram.com/loujainalrefae?igsh=c245MjI3MGQ2eWY=' target='_blank' className=' w-[30px] h-[30px] flex justify-center items-center rounded-[50%] bg-mysecondary text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-mysecondary dark:hover:bg-darkmode'>{instagramIcon}</Link>
                <Link to='https://www.linkedin.com/in/loujain-alrefae-545b62379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className=' w-[30px] h-[30px] flex justify-center items-center rounded-[50%] bg-mysecondary text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-mysecondary dark:hover:bg-darkmode'>{linkedinIcon}</Link>
            </div>
        </div>
    )
}

export default Footer
