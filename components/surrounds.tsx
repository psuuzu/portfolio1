import { Button } from "./ui/button"

export default function Surrounds() {
    return (
        <section className="flex flex-col sm:flex-row justify-center items-center w-full mt-[30px]">
            <div className="flex items-center">
                <img src="/images/ssphones.jpg" alt="Surround Sound picture" className="w-[75vw] sm:w-[35vw] md:w-[25vw]"/>
            </div>
            <div className="w-[90vw] sm:w-[35vw] md:w-[25vw]">
                <h2 className='text-[18px] sm:text-[20px] md:text-[30px]'>SurroundSound</h2>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 mb-[15px]">UI Design | Hackathon</p>
                <p className="text-[12px] sm:text-[14px] md:text-[16px]">SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
                playlists that fit the ambiance of user's surroundings, selected mood, and listening history.</p>
                <div className="flex justify-center sm:justify-start">
                    <Button variant="outline" className="my-[25px] hover:bg-black hover:text-white"><p className="text-[12px] sm:text-[14px] md:text-[16px]">view more</p></Button>
                </div>
            </div>
        </section>
    )
  }