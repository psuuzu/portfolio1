'use client'
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

export default function Brutal() {
    const router = useRouter()
    return (
        <section className=" flex flex-col-reverse sm:flex-row justify-center items-center w-full mt-[40px]">
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] sm:pr-[10px]">
                <h2 className='text-[26px] md:text-[30px] mt-[20px] sm:mt-0'>BrutalSurfCam</h2>
                <h3 className="mb-[15px]">UX Consulting | Freelance</h3>
                <p className="text-[16px]">
                    restructuring a booking flow under complaint pressure, and untangling a rewards system the founder built as three separate parts. A service-design fix disguised as a UI problem. 
                </p>
                <div className="flex justify-center sm:justify-end">
                    <Button onClick={() =>  router.push("brutalsurf")} variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>View more</h4></Button>
                </div>
                
            </div>
            <div className="flex items-center">
                <img src="/images/brutal.jpg" alt="Brutalsurfcam picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
        </section>
    )
  }