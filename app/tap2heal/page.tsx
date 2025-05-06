import { Button } from "@/components/ui/button";

export default function Tap2heal() {
    return(
        <>
        <section className="h-[auto] sm:h-[97vh] flex-col flex justify-center">
            
            <div className="flex-col flex sm:flex-row ml-[5vw] sm:ml-[5vw] md:ml-[10vw] lg:ml-[15vw] h-auto items-center"> 
                <div className="flex mt-[60px] sm:mt-0">
                    <img src="images/taptoheal/logo.png" alt="tap2heal logo" className="w-[110px] h-[130px]"/>
                    <div>
                        <h2 className='text-[30px] sm:text-[35px] text-[#B54733]'>Tap2Heal</h2>
                        <p className="text-[16px] w-auto sm:w-[180px] mt-[10px]">Reimagining prescription healthcare management</p>
                    </div>
                </div>                
                <div className="flex-1 mb-[60px] sm:mb-0 self-end ml-auto">
                    <img src="images/taptoheal/banner.png" alt="banner image" className="w-full h-auto object-contain object-right max-h-[90vh]"/>
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
            <h2 className='!text-[26px] mt-[60px]'>Problem</h2>
            <div className="mt-[80px]"></div>
        </div>
        
        </section>
        </>

    )
}