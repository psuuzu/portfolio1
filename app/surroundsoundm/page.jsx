
import { Button } from "@/components/ui/button";
import Line from "@/components/line";
export default function Surroundsoundm() {


    return (
        <>
        
        <section className='flex flex-col sm:flex-row sm:justify-center items-center h-[550px] sm:h-[100vh] bg-black'>
            <div> 
                <img src="/images/surroundsoundlogo.png" alt="surroundsound logo" className="w-[300px] md:w-[400px]"/>
            </div>
            <div className=" bg-black rounded-xl border-t border-l-[2px] border-b border-[#787878]">
            <video src="/videos/ssvid.mp4"className="h-[350px] sm:h-[400px] my-[15px] mx-[3px]" autoPlay muted loop/>
            </div>
        </section> 
        <section className='flex justify-center bg-[#1e1e1e]'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'> 
                <div className="h-[40px]"></div>
                <p>
                     SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
                    playlists that fit the ambiance of user's surroundings, selected mood, and listening history.
                </p>
                <section className="flex w-full py-[20px]">
                    <div className="w-[50%] flex flex-col items-center justify-center h-auto">
                       
                            <a href="https://surround-sound.vercel.app/" target="_blank" className="w-full flex justify-center">
                                <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white sm:w-[50%]"><h4>Try the App</h4></Button>
                            </a>
                            <a href="https://devpost.com/software/surroundsound-ydkz0b" target="_blank" className="w-full flex justify-center mt-[20px]">
                                <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white sm:w-[50%]"><h4>Devpost</h4></Button>
                            </a>
                            
                    </div>
                    <div className="w-[50%] border-l-1 border-[rgb(200,200,200)] mx-[5px] px-[10px]">
                        <h2 className='!text-[20px]'>
                            Contribution
                        </h2>
                        <h3 className="mb-[15px] !text-[16px] !text-[rgb(200,200,200)]">Market Research</h3>
                        <h3 className="mb-[15px] !text-[16px] !text-[rgb(200,200,200)]">User flow and app structure</h3>
                        <h3 className="mb-[15px] !text-[16px] !text-[rgb(200,200,200)]">Sketching</h3>
                        <h3 className="mb-[15px] !text-[16px] !text-[rgb(200,200,200)]">Wireframing and prototyping</h3>
                    </div>
                    
                </section>  
                
                <h2 className='!text-[24px]'>Role</h2>
                <p>
                I Designed an immersive user experience, where users can generate playlists through a single snapshot, explore playlists in a gallery view as a visual diary, and seamlessly save curated playlists to their Spotify profile for centralized access. 
                </p>
                <h2 className='!text-[24px] mt-[40px]'>Ideation</h2>
                <p>
                Music is deeply tied to atmosphere, but discovering the right songs for specific moments can be tedious. Instead of manually picking music for an occasion, why not let AI do the guesswork? 
                </p>
                <section className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-[10px]">
                    <div className="w-[90%] sm:w-[48%] h-auto bg-[#2c2c2c] rounded-xl my-[2%] px-[18px] py-[10px]">
                        <div className="flex items-center">
                            <img src="/images/cross.png" alt="cross logo" className="w-[20px] h-[20px] mr-[5px]"/>
                            <h2 className='!text-[20px] flex-1'>
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
                    <div className="w-[90%] sm:w-[48%] h-auto bg-[#2c2c2c] rounded-xl my-[2%] px-[18px] py-[10px]">
                        <div className="flex items-center">
                            <img src="/images/check.png" alt="Tick logo" className="w-[20px] h-[20px] mr-[5px]"/>
                            <h2 className='!text-[20px] flex-1'>
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
                <h2 className='!text-[24px] mt-[40px]'>Market Research</h2>
                <p>
                We analyzed leading music and social platforms to identify popular design elements that worked well. This helped pinpoint features that  informed the design direction, ensuring that the platform would balance usability, aesthetics, and innovation while catering to user expectations.
                </p>
                <div className="flex justify-center mt-[20px]">
                    <img src="/images/ssmarket.png" alt="market analysis" className="w-[280px] sm:w-[350px]"></img>
                </div>
             
                <h2 className='!text-[24px] mt-[40px]'>Wireframing and prototyping</h2>
                <p>
                Due to the short hackathon timeframe, the UX design process came under significant pressure. Rapid prototyping was necessary to enable the front-end development to begin as soon as possible. Clear communication between different team roles was crucial in creating a prototype that prioritized efficiency and core functionalities.
                </p>
                <div className="flex justify-center mt-[20px]">
                    <img src="/images/ssfigma.png" alt="surroundsound figma"></img>
                </div>
                <h2 className='!text-[24px] mt-[40px]'>Results</h2>
                <p>
                Our team managed to obtain First place amongst 78 other participants. My UI design was praised by the judge for its effective mobile design and implementation, earning us another accessibility award, bringing the team a total of $850 in cash prize.
                </p>
            
                <div className="mt-[80px]"></div>
            </div>
           

        </section>
        </>

    )
}