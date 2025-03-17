import { Button } from "./ui/button"

export default function Inbound() {
    return (
        <section className="flex flex-col sm:flex-row justify-center items-center w-full mt-[40px]">
            <div className="flex items-center">
                <img src="/images/ssphones.jpg" alt="Surround Sound picture" className="w-[75vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]"/>
            </div>
            <div className="w-[90vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw]">
                <h2 className='text-[26px] md:text-[30px]'>In-Bound</h2>
                <h3 className="mb-[15px]">UI Design | Hackathon</h3>
                <p className="text-[16px]">SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
                playlists that fit the ambiance of user's surroundings, selected mood, and listening history.</p>
                <div className="flex justify-center sm:justify-start">
                <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>view more</h4></Button>
                </div>
            </div>
        </section>
    )
  }