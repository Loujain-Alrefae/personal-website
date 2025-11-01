
// Contact component displays contact info cards and a submission form
const Contact = ({title , des , defColor , phoneIcon , phoneTitle , mailIcon , mailTitle ,locationIcon, locationTitle , btn , contactRef}) => {
    return (
        <div ref={contactRef} className=" mb-[94px]">
             {/* Section title and highlighted subtitle */}
            <div>
                <p className=' text-[20px] text-mysecondary font-medium'>{title}</p>
                <h2 className=' mb-[56px] text-myprimary text-4xl md:text-[40px] font-semibold dark:text-white'>{des} <span className='text-mysecondary'>{defColor}</span></h2>
            </div>
            {/* Contact info cards: phone, email, location */}
            <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-9'>
                <div className=" flex flex-col gap-7 ">
                    <div className='w-[310px] py-[28px] flex gap-5 shadow-[0px_30px_116px_-16px_#D3D3D333] dark:shadow-none bg-[#FFFFFF] dark:bg-darkmode rounded-[8px]'>
                        <div className=' w-[61.8px] h-[56px] flex justify-center items-center text-[#FFFFFF] rounded-[8px] bg-mysecondary text-[25px] '>{phoneIcon}</div>
                        <div className=' '>
                            <p className='text-[#92929D] pb-4'>{phoneTitle}</p>
                            <p className='text-myprimary font-medium dark:text-white'>+963 985 590 671</p>
                        </div>
                    </div>
                    <div className='w-[310px] py-[28px] flex gap-5 shadow-[0px_30px_116px_-16px_#D3D3D333] dark:shadow-none bg-[#FFFFFF] dark:bg-darkmode rounded-[8px] '>
                        <div className=' w-[61.8px] h-[56px] flex justify-center items-center text-[#FFFFFF] rounded-[8px] bg-mysecondary text-[25px]'>{mailIcon}</div>
                        <div className=' '>
                            <p className='text-[#92929D] pb-4'>{mailTitle}</p>
                            <p className='text-myprimary font-medium dark:text-white'>loujainalrefae@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-[310px] py-[28px] flex gap-5 shadow-[0px_30px_116px_-16px_#D3D3D333] dark:shadow-none bg-[#FFFFFF] dark:bg-darkmode rounded-[8px]'>
                        <div className=' w-[61.8px] h-[56px] flex justify-center items-center text-[#FFFFFF] rounded-[8px] bg-mysecondary text-[25px]'>{locationIcon}</div>
                        <div className=' '>
                            <p className='text-[#92929D] pb-4'>{locationTitle}</p>
                            <p className='text-myprimary font-medium dark:text-white'>Damascus,syria</p>
                        </div>
                    </div>
                </div>
                {/* Contact form with Web3Forms integration */}
                <form className="lg:w-[779.7px]" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="9a4d0e9b-0bec-4537-87d0-567140840e41"></input>
                    <div className="w-[100%] flex gap-[26.5px]">
                        <input type="text" name="name"  placeholder='Full name' required className='w-[50%]  py-4 pl-[26.5px] border border-solid border-[#BEC0BF] outline-[#BEC0BF] rounded-[8px] text-[#92929D] '/>
                        <input type="email" name="email"  placeholder='Your email' required className='w-[50%]  py-4 pl-[26.5px] border border-solid border-[#BEC0BF] outline-[#BEC0BF] rounded-[8px]  text-[#92929D] '/>
                    </div>
                    <div className="">
                        <input type="text" name="number" i placeholder='Phone number' required className='w-[100%] my-6 py-4 pl-[26.5px] border border-solid border-[#BEC0BF] outline-[#BEC0BF] rounded-[8px]  text-[#92929D] '/>
                    </div>
                    <div>
                        <textarea name="message"  placeholder='Message' rows="6" required className='w-[100%] py-4 pl-[26.5px] border border-solid border-[#BEC0BF] outline-[#BEC0BF] rounded-[8px] text-[#92929D] resize-none'></textarea>
                    </div>
                    <input type="submit" value={btn} className=" w-[200px] h-[50px] mt-5  bg-mysecondary text-white text-[14px] font-medium rounded-[8px] cursor-pointer" />
                </form>
            </div>
        </div>
    )
}

export default Contact
