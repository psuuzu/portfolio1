'use client'
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

export default function Oishy() {
    const router = useRouter()
    return (
        <section className=" flex flex-col-reverse sm:flex-row justify-center items-center w-full mt-[40px]">
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] sm:pr-[10px]">
                <h2 className='text-[26px] md:text-[30px] mt-[20px] sm:mt-0'>Oishy</h2>
                <h3 className="mb-[15px]">UX Design | Capstone Project</h3>
                <p className="text-[16px]">
                    Struggling to reach a consensus in a large social group? Oishy is an instantaneous dining decision making tool presented in four interactive games to promote fun and efficiency in group outings.
                </p>
                <div className="flex justify-center sm:justify-end">
                    <Button onClick={() => router.push("under construction")} variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>View more</h4></Button>
                </div>
                {/* router.push("oishy") */}
            </div>
            <div className="flex items-center">
                <img src="/images/oishy.jpg" alt="oishy picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
        </section>
    )
  }