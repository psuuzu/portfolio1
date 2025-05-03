
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
                <p className="!text-[20px] mt-[60px] !text-white">
                SurroundSound is a music platform that uses AI to curate personalized Spotify playlists tailored to the user's environment, mood, and listening history. 
                </p>
                <p className="mt-[20px]">
                As the sole UI designer in the team, I facilitated the end to end design process—research, Ideation, wireframing and prototyping
                </p>

                
                <section className="flex flex-col sm:flex-row mt-[60px]">
                    <h2 className='!text-[26px]'>
                        Problem
                    </h2>
                    <div className="h-auto mx-[18px]">            
                        <ul className="list-disc pl-[18px] space-y-[20px]">
                            <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Time Consuming</h2>
                                <p>Discovering new music that fits your vibe can be time consuming. Also, users have to spend time organising songs into playlists themselves</p>
                            </li>
                            <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Generic Recommendations</h2>
                                <p>Existing platforms rely on recommendations from user's overall music taste which can be inefficient as people associate different music for different occasions</p>
                            </li>     
                            <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Lacks Context Awareness</h2>
                                <p>Playlist generation software are not aware about the state users are in</p>
                            </li>
                        </ul> 
                    </div>
                </section>
                <section className="flex flex-col sm:flex-row mt-[60px]">
                    <h2 className='!text-[26px]'>
                        Solution
                    </h2>
                    <div className="h-auto mx-[18px]">
                        <ul className="list-disc pl-[18px] space-y-[20px]">
                            <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>AI and Image recognition</h2>
                                <p>Using AI and image recognition to analyze the surrounding environment</p>
                            </li>
                            <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Personalised Playlist</h2>
                                <p>Using insights from user's surroundings to curate personalized Spotify playlists that fits the mood and music preferences</p>
                            </li>     
                            <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Organised Archive</h2>
                                <p>Saving playlists in an organised archive automatically</p>
                            </li>
                        </ul>
                    </div>     
                </section>
                           
        
                <h2 className='!text-[26px] mt-[60px]'>Ideation</h2>
                <h2 className='!text-[26px] mt-[60px]'>Wireframing and prototyping</h2>
                <p className="mt-[10px]">
                Due to the short hackathon timeframe, the UX design process came under significant pressure. Rapid prototyping was necessary to enable the front-end development to begin as soon as possible. Clear communication between different team roles was crucial in creating a prototype that prioritized efficiency and core functionalities.
                </p>
                <div className="flex justify-center mt-[20px]">
                    <img src="/images/ssfigma.png" alt="surroundsound figma"></img>
                </div>
                <h2 className='!text-[26px] mt-[60px]'>Results</h2>
                <p>
                Our team managed to obtain First place amongst 78 other participants. My UI design was praised by the judge for its effective mobile design and implementation, earning us another accessibility award, bringing the team a total of $850 in cash prize. The app has been used socially amongst friends 
                </p>
            
                <div className="mt-[80px]"></div>
            </div>
           

        </section>
        </>

    )
}