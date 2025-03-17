import { Button } from "./ui/button";

export default function Dscweb() {
    return (
        <section>
            <div className='flex justify-center mt-[40px]'>
                <img src="/images/ssphonesl.jpg" alt="gif" className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]'/>
            </div>    
            <h2 className='text-[26px] md:text-[30px] mt-[20px]'>Dscubed website maintenance </h2>
            <p className="text-[18px] text-gray-500 mb-[15px]">UI Design | Front end</p>
            <p className="text-[16px]">As the Data Science Student Society grows in size, its website needs to evolve to better serve its members and reflect expanding initiatives. This project focuses on updating the club website to align with current goals including redesigning and enhancing its visual appeal as well as updating and adding additional pages.</p>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-[25px] hover:bg-black hover:text-white"><p className="text-[16px]">view more</p></Button>
            </div>
        </section>
    )
}