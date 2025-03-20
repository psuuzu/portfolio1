
export default function Surroundsoundm() {


    return (
        <>
        <div className="h-[40px]"></div>
        <div className='flex justify-center py-[20px]'>
            <video src="/videos/ssvid.mp4"className="h-[70vh] " autoPlay muted loop/>
        </div> 
        <section className='flex justify-center bg-[#1e1e1e]'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>   
                <h2 className='text-[30px] md:text-[35px] pt-[20px]'>SurroundSound</h2>
                <h3 className="mb-[15px]">UI Design | Hackathon | 2024</h3>
               
                <p>
                    SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
                playlists that fit the ambiance of user's surroundings, selected mood, and listening history.
                </p>
                <div className="flex items-center mt-[15px] ">
                    <p className="mr-[10px]">Try the app :</p>
                    <a href="https://surround-sound.vercel.app/" target="_blank" className="break-words flex flex-grow">
                        <p className="underline">
                            Click here 
                        </p>
                    </a>
                </div>
                <div className="flex items-center mt-[15px]">
                    <p className="mr-[10px]">Github repo :</p>
                    <a href="https://github.com/micha31r/surround-sound" target="_blank" className="break-words flex flex-grow">
                        <p className="underline">
                        Click here 
                        </p>
                    </a>
                </div>
                <h2 className='!text-[24px] mt-[20px]'>Role</h2>
                <p>
                I Designed an immersive user experience, where users can generate playlists through a single snapshot, explore playlists in a gallery view as a visual diary, and seamlessly save curated playlists to their Spotify profile for centralized access. 
                </p>
                <h2 className='!text-[24px] mt-[20px]'>Ideation</h2>
                <p>
                Music is associated with vibes and atmospheres. We all have music we love to listen to different occasions like gym music for working out. Currently, it is very hard to explore music that specifically fits one occasion as well as your own music preferences. Instead of manually thinking about what music to pick for an occasion, why not let AI do the guesswork? 
                </p>
                <h2 className='!text-[24px] mt-[20px]'>Market Research</h2>
                <p>
                I took a lot of inspiration from Bereal as their user interface is very simple and intuitive, allowing users to navigate through its core functions with ease. Making the camera page the main page is something I liked a lot since it really encourages users to take photos and progress through the user journey. 
                </p>
                <div className="flex justify-center mt-[20px]">
                    <img src="/images/ssfigma.png" alt="surroundsound figma"></img>
                </div>
                <h2 className='!text-[24px] mt-[20px]'>Wireframing and prototyping</h2>
                <p>
                As the hackathon is only a few days long, the UX design process came under a lot of pressure. I would have to rapidly prototype and propose to the rest of the team for the front end development to start. Communication with different roles of the team was crucial in making a prototype that prioritizes efficiency and main functionalities. 
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