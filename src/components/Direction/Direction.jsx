
// Direction component adds consistent horizontal margin around its children
const Direction = ({children}) => {
    return (
        <div className=' mx-[20px] lg:mx-[70px] dark:bg-[#1B2431]'>
            {children}
        </div>
    )
}

export default Direction
