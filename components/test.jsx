import { Button } from "./ui/button";

export default function Test() {
    return (
        <section>
            <div className='flex justify-center mt-[30px]'>
                <img src="/images/ssphonesl.jpg" alt="gif" className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]'/>
            </div>    
            <h2 className='text-[20px] md:text-[30px] mt-[20px]'>Javascript Animation</h2>
            <p className="text-[16px] md:text-[18px] text-gray-500 mb-[15px]">Front End | Personal Project</p>
            <p className="text-[14px] md:text-[16px]">Mixing pixel art and animation mechanics with vanila javascript, html and css. a project that was fueled through boredom and some free time</p>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-[25px] hover:bg-black hover:text-white"><p className="text-[14px] md:text-[16px]">view more</p></Button>
            </div>
        </section>
    )
}