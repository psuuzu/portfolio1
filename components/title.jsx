export default function Title(){
    return(
    <div className="flex justify-center items-center">
        <div className="w-[47vw] sm:w-[30vw] lg:w-[20vw] flex">
         <h1 className='text-[40px] md:text-[50px] text-right pr-1'>Welcome to Paul's Portfolio</h1>
        </div>
        <div className='w-[47vw] sm:w-[30vw] md:w-[20vw] lg:w-[18vw] flex h-auto'>
         <p className="text-[16px] pl-1">I am a  UX/UI designer who has an interest in front end development and visual arts. I enjoy creating user-centered solutions</p>
        </div>
        {/* space above animation / title */}
    </div> 
    )
}