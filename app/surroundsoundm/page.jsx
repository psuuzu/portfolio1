
import { Button } from "@/components/ui/button";
export default function Surroundsoundm() {


    return (
        <>
        <section className='flex justify-center bg-[#1e1e1e]'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>   
                <h2 className='text-[30px] md:text-[35px] pt-[20px]'>SurroundSound</h2>
                <h3 className="mb-[15px]">UI Design | Hackathon | 2024</h3>
        </div>
        </section>
        
        <section className='flex justify-center items-center h-[450px] bg-[#1e1e1e]'>
            <div className=" bg-black rounded-xl">
            <video src="/videos/ssvid.mp4"className="h-[400px] my-[10px] mx-[3px]" autoPlay muted loop/>
            </div>
        </section> 
        <section className='flex justify-center bg-[#1e1e1e]'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'> 
                <div className="h-[20px]"></div>
                <p>
                     SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
                    playlists that fit the ambiance of user's surroundings, selected mood, and listening history.
                </p>
                <section className="flex w-full py-[20px]">
                    <div className="w-[50%] flex flex-col items-center justify-center h-auto">
                       
                            <a href="https://surround-sound.vercel.app/" target="_blank" className="w-full flex justify-center">
                                <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-black hover:text-white sm:w-[50%]"><h4>Try the App</h4></Button>
                            </a>
                            <a href="https://devpost.com/software/surroundsound-ydkz0b" target="_blank" className="w-full flex justify-center mt-[20px]">
                                <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-black hover:text-white sm:w-[50%]"><h4>Devpost</h4></Button>
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
                <h2 className='!text-[24px] mt-[20px]'>Ideation</h2>
                <p>
                Music is deeply tied to atmosphere, but discovering the right songs for specific moments can be tedious. Instead of manually picking music for an occasion, why not let AI do the guesswork? 
                </p>
                <h2 className='!text-[24px] mt-[20px]'>Market Research</h2>
                <p>
                We analyzed leading music and social platforms to identify popular design elements that worked well. This helped pinpoint features such as interactive social sharing and music discovery. Insights from this phase informed the design direction, ensuring that the platform would balance usability, aesthetics, and innovation while catering to user expectations.
                </p>
                <div className="flex justify-center mt-[20px]">
                    <img src="/images/ssfigma.png" alt="surroundsound figma"></img>
                </div>
                <h2 className='!text-[24px] mt-[20px]'>Wireframing and prototyping</h2>
                <p>
                Due to the short hackathon timeframe, the UX design process came under significant pressure. Rapid prototyping was necessary to enable the front-end development to begin as soon as possible. Clear communication between different team roles was crucial in creating a prototype that prioritized efficiency and core functionalities.
                </p>
                <h2 className='!text-[24px] mt-[20px]'>Results</h2>
                <p>
                Our team managed to obtain First place amongst 78 other participants. My UI design was praised by the judge for its effective mobile design and implementation, earning us another accessibility award.
                </p>
            </div>
        </section>
        </>

    )
}