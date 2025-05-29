import { Button } from "@/components/ui/button";

export default function Tap2heal() {
    return(
        <>
        <section className="h-[auto] sm:h-[97vh] flex-col flex ">
            
            <div className="flex-col flex sm:flex-row ml-[5vw] sm:ml-[5vw] md:ml-[10vw] lg:ml-[15vw] h-auto items-center"> 
                <div className="flex mt-[60px] sm:mt-0">
                    <img src="images/taptoheal/logo.png" alt="tap2heal logo" className="w-[110px] h-[130px]"/>
                    <div>
                        <h2 className='text-[34px] sm:text-[38px] text-[#B54733]'>Tap2Heal</h2>
                        <p className="text-[16px] w-auto sm:w-[180px] mt-[10px]">Reimagining prescription healthcare management</p>
                    </div>
                </div>                
                <div className="flex-1 mb-[60px] sm:mb-0 self-end ml-auto">
                    <img src="images/taptoheal/banner.jpg" alt="banner image" className="w-full h-auto object-contain object-right max-h-[90vh]"/>
                </div>
            </div> 
        </section>
        <section className='flex justify-center bg-[#1e1e1e]'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
            <p className="!text-[20px] mt-[60px] !text-white">
            Simplifying the tracking process of prescription medication through NFC technology, allowing patients to log their prescription through a single tap. 
            </p>
            <p className="mt-[20px]">
            Led market and user research in prescription medication tracking. Developed user personas and journey maps to guide design decisions. Drove the iterative design process, contributing to wireframing and prototyping.
            </p>
            <h2 className='!text-[30px] mt-[60px]'>Problem</h2>
            <p className="!text-[20px] mt-[10px] !text-white">
                Managing pills feels like a chore
            </p>
            <p className="">
                applying incorrect dosages might be fine for treatments of headaches, but for high risk medications like Blood Coagulants, missing or overdosing your medication could be unimaginable.
            </p>
            <h2 className='!text-[30px] mt-[60px]'>
                Current Apps
            </h2>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                    <div className='w-[88px]'></div>
                    <div className="h-auto mx-[18px]">
                        <ul className="list-disc pl-[10px] space-y-[20px]">
                            <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>High Effort</h2>
                                <p>Apps often require long user journeys needing users to manually input data themselves takes up a lot of effort and time</p>
                            </li>
                            <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>No Awareness of Patient's Actions</h2>
                                <p>Since apps rely on user's manual input of data, the apps could not tell if users actually took pills on time or at all</p>
                            </li>     
                            <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Not Flexible</h2>
                                <p>Current apps are essentially glorified alarms. Since they are unaware of user's actions IRL, they are unable to take steps for what if I missed a pill</p>
                            </li>
                        </ul>
                    </div>     
                </section>

        <div className="mt-[80px]"></div>
        </div>
        
        </section>
        </>

    )
}