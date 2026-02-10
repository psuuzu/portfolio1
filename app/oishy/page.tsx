import { Button } from "@/components/ui/button";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { image } from "framer-motion/client";

export default function Oishy() {
        const carouselTexts = [{
            title: "Lazy Suzan",
            description: "The game Lazy Suzan is designed to solve conflicting opinions. It allows everyone to input their preferences and picks one at random with equal chance. Lazy Susan is suitable for an opiniated group.",
            image: "/videos/suzan.mp4",
        },{
            title: "Gachapon",
            description : "Gachapon provides flexibility of choosing options and allowing inaction. The game chooses one option at random from a pool of saved places. Users can choose to add new restaurants or go with the existing pool. Gachapon is designed for groups with a mix of decisive and indecisive people.",  
            image: "/videos/gacha.mp4",
        },{
            title: "Quick Pick",
            description: "Quick pick is the most efficient and time-saving method. The game generates one option that best fits preferences, location, budget, dietary requirements of the whole group. It is suitable in a fast-paced environment.",
            image: "/videos/quickpick.mp4",
        },{
            title: "This or That",
            description: "This or That is designed for restaurant discovery. The Game generates a list of restaurant options close by. Users swipe through the options, and the most popular pick persists. It encourages people to venture out of their existing knowledge base. ",
            image: "/videos/thisthat.mp4",
        }


  
    ];
    return(
        <>
   <section className="h-[620px] sm:h-[97vh] relative flex items-center justify-center sm:justify-normal">
        <div className="z-10 absolute  sm:pl-[10vw] flex flex-col items-center">
    
                <img src="/images/oishy/oishylogo.png" alt="oishy logo" className="h-[50%] w-[50%] "/>
                <h2 className='text-[34px] sm:text-[38px] text-[#f8d742]'>Oishy</h2>
                <p className="mt-[10px] !text-[#fcb040]">Better decisions, faster</p>

        </div>
        <img src="/images/oishy/oishybanner1.png" alt="oishy banner" className="hidden sm:block w-full h-full max-h-[600px] object-cover object-left z-0 absolute"/>
        <img src="/images/oishy/oishybanner2.png" alt="oishy banner" className="sm:hidden w-full h-full max-h-[600px] object-cover object-center z-0 absolute"/>
    </section>
        <section className='flex justify-center bg-[#1e1e1e]'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
            <p className="!text-[20px] mt-[60px] !text-white">
            An instantaneous dining decision making tool presented in four interactive games to promote fun and efficiency within group settings.            </p>
            <p className="mt-[20px]">
            Conducted problem domain analysis through interviews. Planned semi-structured usability tests and designed wireframes and prototypes on an iterative cycle.             </p>

        <h2 className='!text-[30px] mt-[60px]'>Problem</h2>
            <p className="!text-[20px] mt-[10px] !text-white">
                Choosing the right place to eat in a group setting takes too long!
            </p>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Abundance of Options</h2>
                            <p>Access to many cuisines and options leads to decision paralysis especially in cities</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Balancing Multiple Factors</h2>
                            <p>There are many factors to consider to achieve a fair and agreeable place for everyone</p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Time Consuming</h2>
                            <p>Without a structured thought process, people may go “mind blank” or feel uncomfortable voicing their needs, stalling time</p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Solution
            </h2>
            {/* <p className="!text-[20px] mt-[10px] !text-white">
                Incorporating NFC into Prescription drugs. 
            </p> */}
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Efficiency</h2>
                            <p>The four games are designed to cover all circumstances in which indecision may arise</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Equality</h2>
                            <p>The Games considers preferences of all group members when generating a response, ensuring everyone’s satisfaction</p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Simplify Group Management</h2>
                            <p>The app can scan surroundings for active users, checking the group in instantly</p>
                        </li>
                    </ul>
                </div>     
            </section>
        <h2 className='!text-[30px] mt-[60px]'>Problem Domain Interviews</h2>
        <p className="mt-[10px]">
            The problem domain of indecision when searching for dining options is commonly experienced among social groups. Our interviews focused on a socially active demographic – students. A recurring factor observed was the need to balance personal preferences with the group’s needs. Without a structured approach, conversations are stagnant as individuals wait for others to take initiative. Current technologies such as google maps are ineffective at addressing everyone’s preferences. 
        </p>
        
        <h2 className='!text-[30px] mt-[60px]'>Ideation</h2>
        <p className="mt-[10px]">
            Based on insights from user interviews, we developed designs with varying functionalities to evaluate how effectively they address the problem domain.
        </p>
        <img src="/images/oishy/oishyearly.png" alt="Initial Ideas" className="mt-[20px] w-full h-auto"/>
        <p className="mt-[10px]">
            Upon user testing, functions such as filtering, maps and reviews do not aid the decision-making process. Instead, gamified features received positive feedback for the engagement and novelty. As a result, our design direction shifted towards leveraging gamification as a core mechanism. 
        </p>
        <h2 className='!text-[30px] mt-[60px]'>Persona</h2>
        <img src="/images/oishy/persona.png" alt="oishy persona" className="mt-[10px] w-full h-auto"/>

        {/* <h2 className='!text-[30px] mt-[60px]'>Wireframes</h2>
        <img src="/images/oishy/wireframes.png" alt="oishy wireframes" className="mt-[20px] w-full h-auto"/> */}
        <h2 className='!text-[30px] mt-[60px]'>Main Design Concept</h2>
        <p className="mt-[10px]">
                The problem of indecision arises in different contexts with different social group dynamics. Oishy addresses this by offering tailored decision-making modes: from restaurant exploration, automated informed pick, to playful random selections. Each of which is designed for a specific situation and delivered through an engaging, gamified experience. 
        </p>
        <img src="/images/oishy/snippet.png" alt="oishy prototype snippet" className="mt-[20px] w-full h-auto"/>
        <p className="!text-[20px] mt-[20px] !text-white">
            Games :
        </p>
        <div className="flex justify-center sm:w-full">
                    <Carousel opts={{ align: "start" }} className="w-[80%] sm:w-full max-w">
                    <CarouselContent>
                        {carouselTexts.map((text, index) => (
                        <CarouselItem key={index} className="">
                            <div className="">
                            <Card className="bg-[#1e1e1e] border-0">
                                <CardContent className="flex items-center justify-center px-2">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                    <video src={text.image} autoPlay loop muted className="w-[200px] rounded-xl border-5 border-black"/>
                                    <div className="sm:ml-[10px]">
                                        <p className="!text-[20px] mb-[20px] !text-white mt-[10px]">
                                            {text.title} 
                                        </p>
                                        <p className="">{text.description}</p>
                                    </div>
                                </div>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                    </div>
        <h2 className='!text-[30px] mt-[60px]'>User-Based Evaluation Summary</h2>
        <div className="mt-[80px]"></div>
        </div>
        
        </section>
        </>

    )
}