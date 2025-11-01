
const Opinion = ({title , description , defSize ,btn ,icon , onClick  }) => {
    return (
        // Section wrapper with spacing and layered background
        <div  className=" relative mb-[94px] ">
            {/* Rotated background layer for visual depth */}
            <div className="inset-0 bg-mysecondary rotate-[-1.34deg] rounded-[32px] absolute top-0 left-[-6px] z-0 "></div>
            {/* Main content container with purple background */}
            <div className="  bg-[#583FBC] rounded-[32px] relative z-1 ">
                <img src="/assets/image/lines-section.png" alt="Lines" className="w-[100%] h-[100%] absolute top-0 left-0 z-2" />
                <div className="px-[25px]  py-[70px] md:px-[136px] flex justify-between flex-col text-center lg:flex-row lg:text-left items-center gap-7 ">
                    <div className=" lg:w-[589.18px]">
                        <h2 className=" pb-6 text-white text-4xl md:text-[48px] font-semibold">{title}</h2>
                        <p className=" text-white text-[18px] md:text-[20px] ">{description} <span className="font-bold">{defSize}</span></p>
                    </div>
                    {/* Call-to-action button with icon */}
                    <button onClick={onClick} className=" w-[155px] h-[50px] flex justify-center items-center gap-[12.4px] relative z-3 bg-mysecondary text-white rounded-[6px] text-center cursor-pointer">{btn}{icon}</button>
                </div>
            </div>
        </div>
    )
}

export default Opinion
