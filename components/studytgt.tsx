import { Button } from "./ui/button"

export default function Studytgt() {
    return (
        <section className=" flex flex-col-reverse sm:flex-row justify-center items-center w-full mt-[40px]">
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]">
                <h2 className='text-[26px] md:text-[30px]'>StudyTogether</h2>
                <h3 className="mb-[15px]">UI Design | 2024</h3>
                <p className="text-[16px]">Study together is an internal project of the Data Science Student Society, It aims to connect students enrolled in the same subjects and courses together physically to form study groups, share knowledge and improve their learning experiences</p>
                <div className="flex justify-center sm:justify-end">
               
                    <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white">
                        <h4>View more</h4>
                    </Button>
               
                    
                </div>
            </div>
            <div className="flex items-center">
                <img src="/images/studytgt.jpg" alt="Surround Sound picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
        </section>
    )
  }