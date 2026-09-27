import { Button } from "@/components/ui/button";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/ui/nav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { image } from "framer-motion/client";

export default function Brutalsurf() {
    return(
        <>
        <Navbar/>
        <section className="h-[660px] sm:h-[100vh] relative flex items-center justify-center sm:justify-normal">
        <div className="z-10 absolute  sm:pl-[10vw] flex flex-col items-center">
                <h2 className='text-[34px] sm:text-[38px] text-[#77A4B3]'>BrutalSurfCam</h2>
                <p className="mt-[10px] !text-[#D3E9F1]">User Experience Consulting</p>

        </div>
        <img src="/images/brutal/banner1.png" alt="Brutalsurfcam banner" className="hidden sm:block w-full h-full max-h-[600px] object-cover object-left z-0 absolute"/>
        <div className="sm:hidden w-full h-full overflow-hidden relative">
            <img src="/images/brutal/banner2.png" alt="Brutalsurfcam banner" className=" w-full h-full scale-110 object-cover object-center z-0 absolute"/>
        </div>
        </section>
        <section className='flex justify-center bg-[#1e1e1e]'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
            <p className="!text-[20px] mt-[60px] !text-white">
                Brutalsurfcam is attracting a growing number of clients, putting pressure on its manual processes. Out of urgency, the founder has implemented a website prototype to handle the volume but is faced with usability complaints. 
            </p>
            <p className="mt-[20px]">
            As sole UX consultant, I led stakeholder interviews and service mapping to diagnose root causes. Designed and prototyped the booking flow, profile and rewards system at appropriate fidelity. 
            </p>

        <h2 className='!text-[30px] mt-[60px]'>Diagnosis</h2>
            <p className="mt-[16px]">
            Rather than immediately redesigning the UI, I first looked at the wider service experience to pinpoint friction. I began with stakeholder interviews and a service walkthrough. Then :
            </p>
            <section className="flex flex-col sm:flex-row mt-[16px]">
                <div className='w-[24px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[16px]">
                        <li>
                            <p>mapped the end to end customer journey from discovery to service completion</p>
                        </li>
                        <li>
                            <p>clarified the intended role of the website</p>
                        </li>     
                        <li>
                            <p>unpacked the logic behind the quest / reward system</p>
                        </li>
                        <li>
                            <p>gathered existing user feedback and direct quotes</p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Key Findings
            </h2>
                <h2 className='!text-[24px] text-[rgb(200,200,200)] mt-[10px]'>1. Mismatched Purpose</h2>
                <p className="mt-[10px]">
                    Customers land on the website through social media and word of mouth. The homepage re-explains the brand to users who already know it.                 
                </p>
                <h2 className='!text-[24px] text-[rgb(200,200,200)] mt-[20px]'>2. Information Overload</h2>
                <p className="mt-[10px]">
                    The booking flow surfaced too many decisions at once, with repeated sections and an order that differed from the user’s mental model.                
                </p>
                <h2 className='!text-[24px] text-[rgb(200,200,200)] mt-[20px]'>3. Fundamental Usability Issues</h2>
                <p className="mt-[10px]">
                    The website faced repeated information, inconsistent nav bar options, broken mental models, and weak visual hierarchy.                
                </p>
        <h2 className='!text-[30px] mt-[60px]'>
            More than a UI problem
        </h2>
        <h2 className='!text-[24px] text-[rgb(200,200,200)] mt-[10px]'>4. A Fragmented Quest/Rewards System</h2>
        <p className="mt-[10px]">
            The founder described levels, points, and the progression roadmap as one interconnected system. In practice, each was designed and shipped independently, with no shared logic tying them together. 
        </p>

        <h2 className='!text-[30px] mt-[60px]'>Approach</h2>
        <p className="mt-[10px]">
            Given the booking flow's severity and tight timeline, I prioritized speed: diagrams and low-fidelity wireframes got the fix moving fast. The quest and rewards consolidation, by contrast, needed high-fidelity prototypes to make a genuinely complex system legible. 
        </p>
        <p className="mt-[16px]">
            Since users originate through social media, I adopted a mobile-first approach.
        </p>
        <h2 className='!text-[30px] mt-[60px]'>Solution</h2>
        <img src="/images/brutal/4screens.png" alt="Brutalsurfcam prototype" className="w-full h-auto"/>
        <p className="mt-[10px]">
            I reframed the home page around the tasks users came to complete, reducing the long-form homepage to service focused selection page.
        </p>
        <p className="mt-[16px]">
            I redesigned the booking flow into a dynamic interface using progressive disclosure. Each step collapses into an editable summary, so users can review or change earlier choices with minimal scroll. Independent sections are kept to prevent repeated re-entry.
        </p>
        <div className="flex justify-center">
            <video src="/videos/pdisclose.mp4" autoPlay loop muted className="w-[150px] h-auto"/>
        </div>
        <p className="mt-[10px]">
            I removed repetitive content, established consistent styling for interactive elements, merged duplicate nav entry points, and implemented a clear visual hierarchy to guide users intuitively.
        </p>
        <p className="mt-[16px]">
            I consolidated levels, points, and the progression roadmap into one cohesive flow, so the relationship between them is visible in the interface itself.
        </p>
        <img src="/images/brutal/roadmap.png" alt="Brutalsurfcam prototype" className="w-full h-auto sm:w-[90%] mt-[10px]"/>

        <h2 className='!text-[30px] mt-[60px]'>Outcomes</h2>
        <p className="mt-[10px]">
            I reviewed each redesign against the original four issues with the founder, to confirm each solution addressed what it was intended to.
        </p>
        <p className="mt-[16px]">
            The founder found progressive disclosure effective in reducing booking friction, matching the goal of problem 2. The rewards consolidation also validated an idea the founder had been considering independently, prompted by the same user confusion identified in problem 4, confirming the fix aligned with both business intent and usability.
        </p>
        <p className="mt-[16px]">
            Overall, the improved systems and UX has significantly reduced client complaints.
        </p>

        <div className="flex mt-[60px] sm:items-center">
            <h2 className='!text-[30px]'>Links:</h2>
                <div className="flex flex-col sm:flex-row h-auto mx-[10px]">  
                    <a href="https://www.brutalsurfcam.com/Mainpage.html" target="_blank" className="flex justify-center mx-[10px] mb-[10px] sm:mb-0">
                        <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white "><h4>Website</h4></Button>
                    </a>                   
                </div>
        </div>
        <div className="mt-[80px]"></div>
        </div>
        
        </section>
        </>

    )
}