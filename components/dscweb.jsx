import { Button } from "./ui/button";


export default function Dscweb() {
    return (
        <section>
            <div className='flex justify-center mt-[40px]'>
                <img src="/images/dsc.gif" alt="gif" className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]'/>
            </div>    
            <h2 className='text-[26px] md:text-[30px] mt-[20px]'>Dscubed website maintenance </h2>
            <h3 className="mb-[15px]">Club work | UI Design | Front end </h3>
            <p className="text-[16px]">As the Data Science Student Society grows in size, its website needs to evolve to better reflect expanding initiatives. Ensuring the club website aligns with current goals involves redesigning and enhancing its visual appeal as well as updating and adding relevant pages.</p>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>View more</h4></Button>
            </div>
        </section>
    )
}