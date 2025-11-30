'use client'
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

export default function Lab() {
    const router = useRouter()
    return (
        <section className="flex flex-col sm:flex-row justify-center items-center w-full mt-[40px]">
            <div className="flex items-center">
                <img src="/images/yum.jpg" alt="yummly website picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] sm:pl-[10px]">
                <h2 className='text-[26px] md:text-[30px] mt-[20px] sm:mt-0'>Yummly Usability Evaluation</h2>
                <h3 className="mb-[15px]"> UX Research | Usability Testing  </h3>
                <p className="text-[16px]">This study evaluated the Yummly website using expert and user-based methods to identify usability issues and recommend improvements for clearer navigation, better feedback, and more recognizable interface elements.</p>
                <div className="flex justify-center sm:justify-start">
                <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white" onClick={()=>router.push("lab")}><h4>View more</h4></Button>
                </div>

            </div>
        </section>
    )
  }