
import { Button } from "@/components/ui/button";
import Line from "@/components/line";
export default function Surroundsoundm() {


    return (
        <>
        
        <section className='flex flex-col sm:flex-row sm:justify-center items-center h-[620px] sm:h-[100vh] bg-black'>
            <div className="w-[300px] md:w-[400px]"> 
                <img src="/images/surroundsound/surroundsoundlogo.png" alt="surroundsound logo" />
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
                    <h2 className='!text-[30px]'>
                        Problem
                    </h2>
                    <div className="h-auto mx-[18px]">            
                        <ul className="list-disc pl-[10px] space-y-[20px]">
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
                    <h2 className='!text-[30px]'>
                        Solution
                    </h2>
                    <div className="h-auto mx-[18px]">
                        <ul className="list-disc pl-[10px] space-y-[20px]">
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
                           
        
                <h2 className='!text-[30px] mt-[60px]'>Ideation</h2>
                <p className="mt-[10px]">
                Using a moderated version of the MoSCoW framework, I organised ideas into categories based on priority. Given the short timeframe of the hackathon, this approach was crucial for focusing our efforts on high-impact features, ensuring efficient use of time and resources
                </p>
                <img src="images/surroundsound/ideationss.png" alt="ideation notes" className="mt-[20px]"/>
                <h2 className='!text-[30px] mt-[60px]'>App Structure</h2>
                <p className="mt-[10px]">
                Close communication between front-end and back-end teammates helped us identify key features based on viability, efficiency, and functionality. I mapped out the app structure to visualise how components interact with each other
                </p>
                <img src="images/surroundsound/infoarchi.png" alt="app structure diagram" className="mt-[20px]"/>
                <h2 className='!text-[30px] mt-[60px]'>Wireframing and prototyping</h2>
                <p className="mt-[10px]">
                The interface of this app incorporated design features from popular social media and music platforms such as Instagram, Spotify, and BeReal to create a familiar and intuitive user experience to appeal to our target audience.
                </p>
                <div className="flex justify-center mt-[20px]">
                    <img src="/images/surroundsound/ssfigma.png" alt="surroundsound figma"/>
                </div>
                <h2 className='!text-[30px] mt-[60px]'>Results</h2>
                <p className="mt-[10px]">
                Our team managed to obtain First place amongst 78 other participants. My UI design was praised by the judge for its effective mobile design and implementation, earning us another accessibility award, bringing the team a total of $850 in cash prize. The app has been used socially amongst friends today
                </p>
                <p className="mt-[16px]">
                    sample playlist generations:
                </p>
                <div className="flex justify-evenly mt-[20px]">
                    <img src="/images/surroundsound/gen1.jpg" alt="playlist generation 1" className="w-[33%]"/>
                    <img src="/images/surroundsound/gen2.jpg" alt="playlist generation 2" className="w-[33%]"/>
                    <img src="/images/surroundsound/archive.jpg" alt="archive" className="w-[33%]"/>
                </div>
                <div className="flex mt-[60px] items-center">
                    <h2 className='!text-[30px]'>Links:</h2>
                    <div className="flex h-auto mx-[10px]">  
                        <a href="https://surround-sound.vercel.app/" target="_blank" className="flex justify-center mx-[10px]">
                            <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white "><h4>Try the App</h4></Button>
                        </a>
                        <a href="https://devpost.com/software/surroundsound-ydkz0b" target="_blank" className="flex justify-center mx-[10px]">
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