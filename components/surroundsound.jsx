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
            <h3 className="mb-[15px]">UX Design | Winning Hackathon</h3>
            <p className="text-[16px]">
                SurroundSound won first place and received the Accessibility Award at the 2024 CISSA Catalyst Hackathon. Our team developed a functional AI-powered application that curates personalized Spotify playlists based on the user’s surroundings, selected mood, and listening history.
            </p>
            
            <div className="flex justify-center">
                <Button variant="outline" onClick={() => router.push("surroundsound")} className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white">
                    <h4>View more</h4>
                </Button>
            </div>
          
            
        </section>
    )
}