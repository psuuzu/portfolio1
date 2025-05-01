
import { Button } from "@/components/ui/button";
import Line from "@/components/line";
export default function Surroundsoundm() {


    return (
        <>
        
        <section className='flex flex-col sm:flex-row sm:justify-center items-center h-[620px] sm:h-[100vh] bg-black'>
            <div className="w-[300px] md:w-[400px]"> 
                <img src="/images/surroundsoundlogo.png" alt="surroundsound logo" />
                <div className="sm:flex justify-end h-auto mx-[10px] mt-[20px] md:mt-0 "> 
                    
                <div className="flex justify-center h-auto mx-[10px]">
                       
                       <a href="https://surround-sound.vercel.app/" target="_blank" className="flex justify-center mx-[10px]">
                           <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white "><h4>Try the App</h4></Button>
                       </a>
                       <a href="https://devpost.com/software/surroundsound-ydkz0b" target="_blank" className="flex justify-center mx-[10px]">
                           <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white"><h4>Devpost</h4></Button>
                       </a>
                      
                </div>
               </div>
            </div>
            <div className=" bg-black rounded-xl border-t border-l-[2px] border-b border-[#787878] mt-[30px] sm:mt-0">
            <video src="/videos/ssvid.mp4"className="h-[350px] sm:h-[400px] my-[15px] mx-[3px]" autoPlay muted loop/>
            </div>
            
        </section> 
        <section className='flex justify-center bg-[#1e1e1e]'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'> 
                <div className="h-[40px]"></div>
                <p className="!text-[20px] !text-white">
                SurroundSound is a music platform that uses AI to curate personalized Spotify playlists tailored to the user's environment, mood, and listening history. 
                </p>
                <p className="mt-[20px]">
                As the sole UI designer in the team, I facilitated the end to end design process—research, Ideation, wireframing and prototyping
                </p>

                
                <section className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-[20px]">
                    <div className="w-[90%] sm:w-[48%] h-auto rounded-xl my-[2%] px-[18px] py-[10px]">
                        <div className="flex items-center">
                            <img src="/images/cross.png" alt="cross logo" className="w-[20px] h-[20px] mr-[5px]"/>
                            <h2 className='!text-[26px] flex-1'>
                                Problem
                            </h2>
                        </div>
                        <ul className="list-disc px-[18px] space-y-[6px]">
                            <li>
                                <p className="!text-gray-300">Discovering music could be time consuming</p>
                            </li>
                            <li>
                                <p className="!text-gray-300">Existing platforms rely on generic recommendations </p>
                            </li>     
                            <li>
                                <p className="!text-gray-300">Playlist generations are not context aware</p>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="w-[90%] sm:w-[48%] h-auto rounded-xl my-[2%] px-[18px] py-[10px]">
                        <div className="flex items-center">
                            <img src="/images/check.png" alt="Tick logo" className="w-[20px] h-[20px] mr-[5px]"/>
                            <h2 className='!text-[26px] flex-1'>
                                Solution
                            </h2>
                        </div>
                        <ul className="list-disc px-[18px] space-y-[6px]">
                            <li>
                                <p className="!text-gray-300">Using AI and image recognition to analyze user's surrounding</p>
                            </li>
                            <li>
                                <p className="!text-gray-300">Curate personalized Spotify playlists </p>
                            </li>     
                            <li>
                                <p className="!text-gray-300">Save playlists in an organised archive </p>
                            </li>
                        </ul>
                    </div>
                </section>
        
                <h2 className='!text-[26px] mt-[40px]'>Ideation</h2>
                <h2 className='!text-[26px] mt-[40px]'>Wireframing and prototyping</h2>
                <p>
                Due to the short hackathon timeframe, the UX design process came under significant pressure. Rapid prototyping was necessary to enable the front-end development to begin as soon as possible. Clear communication between different team roles was crucial in creating a prototype that prioritized efficiency and core functionalities.
                </p>
                <div className="flex justify-center mt-[20px]">
                    <img src="/images/ssfigma.png" alt="surroundsound figma"></img>
                </div>
                <h2 className='!text-[26px] mt-[40px]'>Results</h2>
                <p>
                Our team managed to obtain First place amongst 78 other participants. My UI design was praised by the judge for its effective mobile design and implementation, earning us another accessibility award, bringing the team a total of $850 in cash prize.
                </p>
            
                <div className="mt-[80px]"></div>
            </div>
           

        </section>
        </>

    )
}