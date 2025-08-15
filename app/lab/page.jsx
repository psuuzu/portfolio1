import { Button } from "@/components/ui/button";

export default function Tap2heal() {
    return(
        <>
        <section className="h-[620px] sm:h-[97vh] flex-col flex w-full"> 
            <div className="h-full w-full sm:w-auto flex-col flex sm:flex-row items-center justify-center relative"> 
                <div className="flex  z-10">
                    <img src="images/yummly/yummlylogo.png" alt="yummly logo" className="h-[100px] sm:h-[130px]"/>
                    <div className="ml-[10px] sm:ml-[30px]">
                        <h2 className='text-[34px] sm:text-[38px] text-[#E0601F]'>Yummly</h2>
                        <p className="!text-white text-[16px] w-auto sm:w-[180px] mt-[10px]">Usability evaluation</p>
                    </div>
                </div>                
                <div className="w-full sm:w-auto h-full sm:mb-0 absolute z-0 right-0 hidden sm:block">
                    <img src="images/yummly/banners.png" alt="banner image" className="w-full h-full sm:w-auto sm:h-full object-cover object-right"/>
                </div>
                <div className="w-full sm:w-auto h-full sm:mb-0 absolute z-0 right-0 sm:hidden">
                    <img src="images/lab.jpg" alt="banner image" className="w-full h-full sm:w-auto sm:h-full object-cover"/>
                </div>
            </div> 
        </section>
        <section className='flex justify-center bg-[#1e1e1e]'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
            <p className="!text-[20px] mt-[60px] !text-white">
                This report presents the results of a study conducted on the Yummly website (an online recipe and meal planning platform). The study aimed to identify usability issues of the site and to determine relevant recommendations to improve the usability and user experience for Yummly’s users.
            </p>
            <p className="mt-[20px]">
            Conducted:            
            </p>
            <div className="pl-[32px]">
                <p className="mt-[20px]">
                Expert based methods : heuristic evaluation, cognitive walkthrough          
                </p>
            </div>
            <div className="pl-[32px]">
                <p className="mt-[20px]">
                User based : unmoderated online test, moderated lab testing (conducted in UX Labs at Melbourne Connect) , questionnaires         
                </p>
            </div>
            
            <h2 className='!text-[30px] mt-[60px]'>Key Findings</h2>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Feedback</h2>
                            <p>
                                Lack of feedback negatively impacts the gulf of evaluation as users are unable to interpret whether their action was successful
                            </p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Layout</h2>
                            <p>
                                Some elements would cover up other information, preventing access to other pages.
                            </p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Recognition</h2>
                            <p>
                                Unclear labels, and ambiguous icons. The lack of understanding negatively impacts the gulf of execution
                            </p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Key recommendations
            </h2>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Button Redesign</h2>
                            <p>To create a more recognizable “Save” button for saving recipes</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Information Structure</h2>
                            <p>
                            Form a clearer path for users to search for and filter out recipes                                
                            </p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Help and Documentation</h2>
                            <p>
                                Ensure help documentation for various site functions is available for users at any stage of their user experience
                            </p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Heuristic Evaluation
            </h2>
            <p className="mt-[10px]">
                Initial analysis involved exploring the site, following Jakob Nielson’s 10 Usability heuristics.
            </p>
            <img src="images/yummly/heuristic.png" alt="heuristic evaluaation" className="mt-[30px]" />
            <h2 className='!text-[30px] mt-[60px]'>
                Scenarios
            </h2>
            <p className="mt-[10px]">We defined the information structure of the app and experimented around with different layouts and styles. Our goal was to create a seamless experience for patients — one that felt effortless and reassuring, rather than burdensome.</p>
            <p className="mt-[10px]">Patient's Mobile:</p>
            <img src="images/taptoheal/wireframephone.png" alt="wireframe mobile" className="mt-[20px]" />
            <p className="mt-[10px]">GP's Desktop:</p>
            <img src="images/taptoheal/wireframedesktop.png" alt="wireframe mobile" className="mt-[20px]" />


            <h2 className='!text-[30px] mt-[60px]'>
                Cognitive Walkthrough
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