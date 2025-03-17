import { Button } from "./ui/button";

export default function Surroundsound() {
    return (
        <section>
            <div className='flex justify-center mt-[40px]'>
                <img src="/images/ssphonesl.jpg" alt="gif" className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]'/>
            </div>    
            <h2 className='text-[26px] md:text-[30px] mt-[20px]'>SurroundSound</h2>
            <p className="text-[18px] text-gray-500 mb-[15px]">UI Design | Hackathon | 2024</p>
            <p className="text-[16px]">SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
            playlists that fit the ambiance of user's surroundings, selected mood, and listening history.</p>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-[25px] hover:bg-black hover:text-white"><p className="text-[16px]">view more</p></Button>
            </div>
        </section>
    )
}