import { Button } from "./ui/button"

export default function Tap2Heal() {
    return (
        <section className=" flex flex-col-reverse sm:flex-row justify-center items-center w-full mt-[40px]">
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]">
                <h2 className='text-[26px] md:text-[30px]'>Tap2Heal</h2>
                <h3 className="mb-[15px]">UI Design | Hackathon | 2024</h3>
                <p className="text-[16px]">Current pill tracking apps are high maintenance and they not aware of users actions in real life. Tap2Heal is aimed to simplify the tracking process of prescription medication through NFC technology allowing patients to log their prescription through a single tap of their phone.</p>
                <div className="flex justify-center sm:justify-end">
                    <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>View more</h4></Button>
                </div>
            </div>
            <div className="flex items-center">
                <img src="/images/tap2heal.jpg" alt="Surround Sound picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
        </section>
    )
  }