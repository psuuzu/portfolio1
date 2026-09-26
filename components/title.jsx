export default function Title(){
    return(
    <div className="flex justify-center items-center">
        <div className="w-1/2 flex justify-end">
        <div className="w-[47vw] sm:w-[30vw] lg:w-[240px] flex">
         <h1 className='text-[40px] md:text-[50px] text-right pr-1'>Welcome to Paul's Portfolio</h1>
        </div>
        </div>
        <div className="w-1/2 flex justify-start">
        <div className='w-[47vw] sm:w-[30vw] md:w-[20vw] lg:w-[180px] flex h-auto'>
         <p className="text-[16px] pl-1">I’m a UX designer combining research, design, and development to to turn complex problems into simple, intuitive solutions</p>
        </div>
        </div>
    </div> 
    )
}