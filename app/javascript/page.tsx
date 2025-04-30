import { Button } from "@/components/ui/button"

export default function Page(){
    return(
        <>
        <section className="h-[450px] sm:h-[85vh] flex flex-col justify-center" >
            <div className="flex-1 flex flex-col justify-center items-center">   
                <h2 className='text-[26px] md:text-[30px]'>Javascript pixel animation</h2>
                <p className="text-[16px] pl-1 w-[300px] text-center">Mixing pixel art and animation mechanics with vanila Javascript, Html and Css.</p>
                <a href="https://github.com/psuuzu/animation" target="_blank" className="w-full flex justify-center mt-[40px]">
                    <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white"><h4>Github</h4></Button>
                </a>
                {/* space above animation / title */}
            </div> 
            <div className='flex justify-center h-auto'>
                <img src="/images/anim8c.gif" alt="gif" className='w-[90vw] sm:w-[55vw] lg:w-[40vw]'/>
                {/* animation */}
            </div>  
        </section>
        <section className='flex justify-center bg-[#1e1e1e] mt-[60px]'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'> 
               
                <h2 className='!text-[24px] mt-[40px]'>Draft</h2>
                <p>
                    The pixel art of the animation is first drafted on Piskel on a 80 by 40 grid. 
                </p>
                <p>
                    A base frame that shows the bus station is created by assigning colors to pixels. Movement frames are created by making small changes one by one to the base frame. Flashing frames are made by deleting the pixels from the base frame while keeping the sparks. 
                </p>
                <p className="mt-[20px] !text-white !text-[18px]">Base Frame</p>
                <img src="/images/piskelbase.png" alt="base frame image"/>
                <p className="mt-[20px] !text-white !text-[18px]">Movement Frames</p>
                <img src="/images/movementframes.png" alt="movement frames"/>
                <p className="mt-[20px] !text-white !text-[18px]">Flashing Frames</p>
                <img src="/images/flashingframes.png" alt="flashing frames"/>
                <p className="mt-[20px]">
                    All frames are put together in sequential order. After previewing and tweaking the speed, a suitable framerate was defined. 
                </p>

                <h2 className='!text-[24px] mt-[40px]'>Implementation in Javascript</h2>
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
                <img src="/images/animationconcept.png" alt="animation concept visualised" className="mt-[30px]" />
                <h2 className='!text-[24px] mt-[40px]'>Takeaways</h2>
                <p>
                the animation works as the Javascript logic follows pixel art animation mechanics. However, the code is inefficient, containing long lines of 2d arrays defining each and every pixel of every frame. It is also not scalable, especially for long animations with higher definition as defining pixels on 2d arrays is a tedious process. 
                </p>
                <h2 className='!text-[24px] mt-[40px]'>Next Steps</h2>
                <p>
                A program could be developed that reads Piskel files and turns them into JavaScript arrays automatically
                </p>
                <div className="mt-[80px]"></div>
            </div>
        </section>
        </>
    )
}