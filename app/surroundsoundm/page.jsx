
import { Button } from "../../components/ui/button";



export default function Surroundsoundm() {


    return (
        <>
        <div className="h-[40px]"></div>
        <div className='flex justify-center py-[20px]'>
            <video src="/videos/ssvid.mp4"className="h-[70vh]" autoPlay muted loop/>
        </div> 
        <section className='flex justify-center bg-[#1e1e1e]'>
            <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>   
                <h2 className='text-[26px] md:text-[30px] mt-[20px]'>SurroundSound</h2>
                <h3 className="mb-[15px]">UI Design | Hackathon | 2024</h3>
                <p className="text-[16px]">SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
                playlists that fit the ambiance of user's surroundings, selected mood, and listening history.</p>
                
                <div className="flex justify-center">
                    <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white">
                        <h4>View more</h4>
                    </Button>
                </div>
            </div>
        </section>
        </>

    )
}