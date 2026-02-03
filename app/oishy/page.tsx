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
        <img src="/images/oishy/oishybanner1.png" alt="oishy banner" className="hidden sm:block w-full h-full max-h-[600px] object-cover object-left z-0 absolute"/>
    </section>
        <section className='flex justify-center bg-[#1e1e1e]'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
            <p className="!text-[20px] mt-[60px] !text-white">
            An instantaneous dining decision making tool presented in four interactive games to promote fun and efficiency within group settings.            </p>
            <p className="mt-[20px]">
            Conducted problem domain analysis through interviews. Planned semi-structured usability tests and designed wireframes and prototypes on an iterative cycle.             </p>

        <h2 className='!text-[30px] mt-[60px]'>Problem</h2>
            <p className="!text-[20px] mt-[10px] !text-white">
                Choosing the right place to eat in a group setting takes too long!
            </p>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Abundance of Options</h2>
                            <p>Access to many cuisines and options leads to decision paralysis especially in cities</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Balancing Multiple Factors</h2>
                            <p>There are many factors to consider to achieve a fair and agreeable place for everyone</p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Time Consuming</h2>
                            <p>Without a structured thought process, people may go “mind blank” or feel uncomfortable voicing their needs, stalling time</p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Solution
            </h2>
            {/* <p className="!text-[20px] mt-[10px] !text-white">
                Incorporating NFC into Prescription drugs. 
            </p> */}
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Efficiency</h2>
                            <p>The four games are designed to cover all circumstances in which indecision may arise</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Equality</h2>
                            <p>The Games considers preferences of all group members when generating a response, ensuring everyone’s satisfaction</p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Simplify Group Management</h2>
                            <p>The app can scan surroundings for active users, checking the group in instantly</p>
                        </li>
                    </ul>
                </div>     
            </section>
        <h2 className='!text-[30px] mt-[60px]'>Problem Domain Interviews</h2>
        <p className="mt-[10px]">
            The problem domain of indecision when searching for dining options is commonly experienced among social groups. Our interviews focused on a socially active demographic – students. A recurring factor observed was the need to balance personal preferences with the group’s needs, which often stalls time as individuals wait for others to take initiative. Current technologies such as google maps are ineffective at addressing everyone’s preferences 
        </p>
        <div className="mt-[80px]"></div>
        </div>
        
        </section>
        </>

    )
}