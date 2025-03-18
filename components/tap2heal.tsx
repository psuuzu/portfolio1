import { Button } from "./ui/button"

export default function Tap2Heal() {
    return (
        <section className=" flex flex-col-reverse sm:flex-row justify-center items-center w-full mt-[30px]">
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]">
                <h2 className='text-[20px] md:text-[30px]'>Tap2Heal</h2>
                <p className="text-[16px] md:text-[18px] text-gray-500 mb-[15px]">UI Design | Hackathon</p>
                <p className="text-[14px] md:text-[16px]">Current pill tracking apps are high maintenance and they not aware of users actions in real life. Tap2Heal is aimed to simplify the tracking process of prescription medication through NFC technology allowing patients to log their prescription through a single tap of their phone.</p>
                <div className="flex justify-center sm:justify-end">
                    <Button variant="outline" className="mt-[25px] hover:bg-black hover:text-white"><p className="text-[14px] md:text-[16px]">view more</p></Button>
                </div>
            </div>
            <div className="flex items-center">
                <img src="/images/tap2heal.jpg" alt="Surround Sound picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
        </section>
    )
  }