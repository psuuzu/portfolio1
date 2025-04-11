import { Button } from "@/components/ui/button"

export default function Page(){
    return(
        <>
        <section className="h-[450px] sm:h-[85vh] flex flex-col justify-center" >
            <div className="flex-1 flex flex-col justify-center items-center">   
                <h2 className='text-[26px] md:text-[30px]'>Javascript pixel animation</h2>
                <p className="text-[16px] pl-1 w-[300px] text-center">Mixing pixel art and animation mechanics with vanila Javascript, Html and Css.</p>
                {/* space above animation / title */}
            </div> 
            <div className='flex justify-center h-auto'>
                <img src="/images/anim8c.gif" alt="gif" className='w-[90vw] sm:w-[55vw] lg:w-[40vw]'/>
                {/* animation */}
            </div>  
        </section>
        <section className='flex justify-center bg-[#1e1e1e] mt-[60px]'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'> 
                <div className="h-[40px]"></div>
                <h2 className='!text-[24px]'>Concept</h2>
                <p>
                    Animation is the illusion of movement created by displaying a sequence of static frames quickly. 
                </p>
        
                <ul className="list-disc px-[18px] space-y-[6px] mt-[20px]">
                    <li>
                        <p>The frames are represented by 2d arrays which maps each pixel colour.</p>
                    </li>
                    <li>
                        <p>A function cycles through each array / frame and updates the colours of the array on to the grid.</p>
                    </li>     
                    <li>
                        <p>The cycle of frames is separated by a set delay to manage the speed of the gif.</p>
                    </li>
                </ul>
                <img src="/images/animationconcept.png" alt="animation concept visualised" className="mt-[40px]" />
                <a href="https://github.com/psuuzu/animation" target="_blank" className="w-full flex justify-center mt-[10px]">
                    <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white"><h4>Github</h4></Button>
                </a>
                <h2 className='!text-[24px] mt-[20px]'>Draft Drawing</h2>

            </div>
        </section>
        </>
    )
}