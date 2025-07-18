import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Dscweb() {
    const router = useRouter()
    return (
        <section>
            <div className='flex justify-center mt-[40px]'>
                <img src="/images/dsc.gif" alt="gif" className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]'/>
            </div>    
            <h2 className='text-[26px] md:text-[30px] mt-[20px]'>Dscubed website redesign </h2>
            <h3 className="mb-[15px]">Club work | UI UX Design </h3>
            <p className="text-[16px]">As the Data Science Student Society grows in size, its website needs to evolve to better reflect expanding initiatives. Ensuring the club website aligns with current goals involves redesigning and enhancing its visual appeal as well as updating and adding relevant pages.</p>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white" onClick={() => router.push("dsc")}><h4>View more</h4></Button>
            </div>
        </section>
    )
}