import { Button } from "@/components/ui/button";

export default function Oishy() {
    return(
        <>
   <section className="h-[620px] sm:h-[97vh] relative flex items-center justify-center sm:justify-normal">
        <div className="z-10 absolute  sm:pl-[10vw] flex flex-col items-center">
    
                <img src="/images/oishy/oishylogo.png" alt="oishy logo" className="h-[50%] w-[50%] "/>
                <h2 className='text-[34px] sm:text-[38px] text-[#f8d742]'>Oishy</h2>
                <p className="mt-[10px] !text-[#fcb040]">Better decisions, faster</p>

        </div>
        <img src="/images/oishy/oishybanner2.png" alt="oishy banner" className="hidden sm:block w-full h-full max-h-[600px] object-cover object-left z-0 absolute"/>
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
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>High Effort</h2>
                            <p>Current apps often require long user journeys needing users to manually input data themselves takes up a lot of effort and time</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>No Awareness of Patient's Actions</h2>
                            <p>Since current apps rely on user's manual input of data, the apps could not tell if users actually took pills on time or at all</p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Not Flexible</h2>
                            <p>Current apps are essentially glorified alarms. Since they are unaware of user's actions IRL, they are unable to take steps for what if I missed a pill</p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Solution
            </h2>
            <p className="!text-[20px] mt-[10px] !text-white">
                Incorporating NFC into Prescription drugs. 
            </p>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Easy to Use</h2>
                            <p>When notified to take their pill, the patient can simply tap their phone onto the NFC sticker to log their intake without any other user input needed</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Awareness of Patient's Actions</h2>
                            <p>Due to the action-oriented pill tracking method, the app is aware of patient’s pill intake</p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Flexible</h2>
                            <p>GP's can change pill intake schedule after visit and the app updates automatically</p>
                            <p> Also, since the app is aware of user actions IRL, it can contact emergency contacts if important pill is missed</p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                User Journey
            </h2>
            <img src="images/oishy/journey.png" alt="journey map" className="mt-[10px]" />
            <h2 className='!text-[30px] mt-[60px]'>
                Wireframing
            </h2>
            <p className="mt-[10px]">We defined the information structure of the app and experimented around with different layouts and styles. Our goal was to create a seamless experience for patients — one that felt effortless and reassuring, rather than burdensome.</p>
            <p className="mt-[10px]">Patient's Mobile:</p>
            <img src="images/oishy/wireframephone.png" alt="wireframe mobile" className="mt-[20px]" />
            <p className="mt-[10px]">GP's Desktop:</p>
            <img src="images/oishy/wireframedesktop.png" alt="wireframe mobile" className="mt-[20px]" />


            <h2 className='!text-[30px] mt-[60px]'>
                Prototype
            </h2>
            <p className="mt-[10px]">Building on the wireframes, we developed interactive prototypes to bring the app’s core experience to life. Using Figma’s prototyping tools, we created high-fidelity prototypes that simulated key user flows</p>

            <p className="mt-[20px]">Patient's Mobile (Video):</p>
            <div className="justify-center flex mt-[20px]">
                <video src="images/taptoheal/mobileprototype.mp4" autoPlay loop playsInline muted className="" />
            </div>
            <p className="mt-[20px]">Sample NFC --with QR code alternative-- sticker  on prescription bottle:</p>
            <div className="justify-center flex mt-[20px]">
                <img src="images/taptoheal/nfc.png" alt="nfc sticker" className="rounded-lg w-[60%] h-auto" />
            </div>

            <p className="mt-[20px]">GP's Desktop (Video):</p>
            <div className="justify-center flex mt-[20px]">
                <video src="images/taptoheal/desktopprototype.mp4" autoPlay loop playsInline muted className="" />
            </div>

            <div className="flex mt-[60px] items-center">
                <h2 className='!text-[30px]'>Links:</h2>
                    <div className="flex h-auto mx-[10px]">  
                        <a href="https://www.figma.com/design/P9STfJptgY0JX70RnQB7FT/Product-thon?node-id=60-2&p=f&t=uk2ZciDcPN54r3HY-0" target="_blank" className="flex justify-center mx-[10px]">
                            <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white "><h4>Figma</h4></Button>
                        </a>
                        <a href="https://devpost.com/software/tap2heal?" target="_blank" className="flex justify-center mx-[10px]">
                            <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white"><h4>Devpost</h4></Button>
                        </a>                      
                    </div>
            </div>
        <div className="mt-[80px]"></div>
        </div>
        
        </section>
        </>

    )
}