'use client'
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


export default function Surroundsound() {
    const router = useRouter()

    return (
        <section>
            <div className='flex justify-center mt-[40px]'>
                <img src="/images/ssphonesl.jpg" alt="gif" className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]'/>
            </div>    
            <h2 className='text-[26px] md:text-[30px] mt-[20px]'>SurroundSound</h2>
            <h3 className="mb-[15px]">UI Design | Hackathon</h3>
            <p className="text-[16px]">SurroundSound is a project that won first place and accessibility award in the 2024 CISSA Catalyst Hackathon. Our team developed a working application that uses AI to curate personalized Spotify 
            playlists that fit the ambiance of user's surroundings, selected mood, and listening history.</p>
            
            <div className="flex justify-center">
                <Button variant="outline" onClick={() => router.push("surroundsoundm")} className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white">
                    <h4>View more</h4>
                </Button>
            </div>
          
            
        </section>
    )
}