import { Button } from "./ui/button"

export default function Redesign() {
    return (
        <section className="flex flex-col sm:flex-row justify-center items-center w-full mt-[40px]">
            <div className="flex items-center">
                <img src="/images/maxx.jpg" alt="maxx website picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]">
                <h2 className='text-[26px] md:text-[30px]'>Maxx Gaming re-design</h2>
                <h3 className="mb-[15px]">UI UX Design | Front End | Uni Coursework</h3>
                <p className="text-[16px]">This project focuses on redesigning the Maxx Gaming website to enhance its professionalism and competitiveness by implementing the full UI development process from research and analysis to front end implementation</p>
                <div className="flex justify-center sm:justify-start">
                <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>View more</h4></Button>
                </div>
            </div>
        </section>
    )
  }