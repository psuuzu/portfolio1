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

export default function Lab() {
    const carouselTexts = [
  "You just arrived home from work and were craving Indian curry. However, you were unsure on how to make it yourself, show me how you could find this information",
  "You are a busy person who works during the majority of the week, so you decided to start meal planning for the week to reduce the number of grocery trips. Show me how you could start a meal planner and shopping list",
  "You are searching for a cake recipe in Yummly for your mum. You want to save this cake recipe while adding a note to buy other extra ingredients to further personalise the cake",
  "You are hungry but don't know what to cook. Browse and find a new recipe for yourself (in this scenario you cannot eat pork due to religious reasons)",
  "You’re unfamiliar with cooking in general- you use the “guided recipes” feature to walk through a recipe you are interested in by following the step-by-step instructions with video clips. Following this, you decide to leave a review afterward",
    ];
    return(
        <>
        <section className="h-[620px] sm:h-[97vh] flex-col flex w-full"> 
            <div className="h-full w-full sm:w-auto flex-col flex sm:flex-row items-center justify-center relative"> 
                <div className="flex  z-10">
                    <img src="images/yummly/yummlylogo.png" alt="yummly logo" className="h-[100px] sm:h-[130px]"/>
                    <div className="ml-[10px] sm:ml-[30px]">
                        <h2 className='text-[34px] sm:text-[38px] text-[#E0601F]'>Yummly</h2>
                        <p className="!text-white text-[16px] w-auto sm:w-[180px] mt-[10px]">Usability Evaluation</p>
                    </div>
                </div>                
                <div className="w-full sm:w-auto h-full sm:mb-0 absolute z-0 right-0 hidden sm:block">
                    <img src="images/yummly/banners.png" alt="banner image" className="w-full h-full sm:w-auto sm:h-full object-cover object-right"/>
                </div>
                <div className="w-full sm:w-auto h-full sm:mb-0 absolute z-0 right-0 sm:hidden">
                    <img src="images/lab.jpg" alt="banner image" className="w-full h-full sm:w-auto sm:h-full object-cover"/>
                </div>
            </div> 
        </section>
        <section className='flex justify-center bg-[#1e1e1e]'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
            <p className="!text-[20px] mt-[60px] !text-white">
                The study aimed to identify usability issues of Yummly (an online recipe and meal planning platform) to determine relevant recommendations to improve the usability and user experience.
            </p>
            <p className="mt-[20px]">
            Conducted:            
            </p>
            <div className="pl-[32px]">
                <p className="mt-[20px]">
                Expert based methods : heuristic evaluation, cognitive walkthrough          
                </p>
            </div>
            <div className="pl-[32px]">
                <p className="mt-[20px]">
                User based : unmoderated online test, moderated lab test (conducted in UX Labs at Melbourne Connect) , questionnaires         
                </p>
            </div>
            
            <h2 className='!text-[30px] mt-[60px]'>Key Findings</h2>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Feedback</h2>
                            <p>
                                Lack of feedback negatively impacts the gulf of evaluation as users are unable to interpret whether their action was successful
                            </p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Layout</h2>
                            <p>
                                Some elements would cover up other information, preventing access to other pages.
                            </p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Recognition</h2>
                            <p>
                                Unclear labels, and ambiguous icons. The lack of understanding negatively impacts the gulf of execution
                            </p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Key recommendations
            </h2>
            <section className="flex flex-col sm:flex-row mt-[10px]">
                <div className='w-[50px]'></div>
                <div className="h-auto mx-[18px]">
                    <ul className="list-disc pl-[10px] space-y-[20px]">
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Button Redesign</h2>
                            <p>To create a more recognizable “Save” button for saving recipes</p>
                        </li>
                        <li>
                        <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Information Structure</h2>
                            <p>
                            Form a clearer path for users to search for and filter out recipes                                
                            </p>
                        </li>     
                        <li>
                            <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Help and Documentation</h2>
                            <p>
                                Ensure help documentation for various site functions is available for users at any stage of their user experience
                            </p>
                        </li>
                    </ul>
                </div>     
            </section>
            <h2 className='!text-[30px] mt-[60px]'>
                Heuristic Evaluation
            </h2>
            <p className="mt-[10px]">
                Initial analysis involved exploring the site, following Jakob Nielson’s 10 Usability heuristics.
            </p>
            <img src="images/yummly/heuristic.png" alt="heuristic evaluaation" className="mt-[20px]" />
            <h2 className='!text-[30px] mt-[60px]'>
                Scenarios
            </h2>
            <p className="mt-[10px]">
                Defined main features of the website, created 5 scenarios that are designed to touch upon all core functions. These scenarios are used to conduct cognitive walkthrough and Moderated lab testing.
            </p>
            <div className="flex justify-center sm:w-full mt-[20px]">
            <Carousel opts={{ align: "start" }} className="w-[80%] sm:w-full max-w">
            <CarouselContent>
                {carouselTexts.map((text, index) => (
                <CarouselItem key={index} className="sm:basis-1/2">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex items-center justify-center p-6">
                        <p className="!text-black">{text}</p>
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
            

            <h2 className='!text-[30px] mt-[60px]'>
                Cognitive Walkthrough
            </h2>
            <p className="mt-[10px]">
                I broke down each scenario into small steps, evaluating : will users know what to do? see how to do it? and understand from the feedback whether they did it correctly?            
            </p>
            <p className="mt-[20px]">
                Example 1 : Scenario 4 - customizing search to find a recipe
            </p>
            <img src="images/yummly/cognitive.png" alt="cognitive walkthrough" className="mt-[10px] rounded-xl" />
            <h2 className='!text-[30px] mt-[60px]'>
                First Click Test
            </h2>
            <p className="mt-[10px]">
                Participants were presented with a short scenario, followed by a screenshot of the main page of Yummly. They would then click on any part of the screen they believed would be the first step of hypothetically completing the task. 
            </p>
            <img src="images/yummly/firstclick.png" alt="first click test" className="mt-[20px] rounded-xl" />
            <p className="mt-[10px]">
                The results from the first click test varied a lot. This highlighted issues with recognition and layout as participants have commented “difficult to find at first glance”, “hard to tell where I’m supposed to look” after the test. 
            </p>
            <h2 className='!text-[30px] mt-[60px]'>
                Lab Test
            </h2>
           <p className="mt-[10px]">
            The moderated onsite testing was conducted in the UX lab at Melbourne Connect. The test involved 6 participants, selected through convenience sampling, who each completed the study individually. Each participant has given informed consent after reading the plain language statement.
           </p>
           <p className="mt-[16px]">
            The test was conducted following a structured protocol consisting of: an introduction, participant briefing, task execution, a post-test questionnaire, and a debrief. (view the full test protocol in the full report) 
           </p>
           <h2 className="!text-[24px] sm:block hidden mt-[20px]">Roles</h2>
           <div className="sm:flex-row flex flex-col-reverse w-full mt-[20px] sm:mt-[0] items-center">
                <div className="w-full sm:w-[50%]">
                    <h2 className="!text-[24px] sm:hidden mt-[20px]">Roles</h2>
                    <p className="mt-[10px] font-semibold !text-white">Host :</p>
                    <p className="">Set up invitations and welcomed participants.</p>
                    <p className="mt-[16px] font-semibold !text-white">Facilitator</p>
                    <p className="">
                        Briefed and debriefed participants, presented them with 5 task scenarios to complete, following the full test protocol.
                    </p>
                    <p className="mt-[16px] font-semibold !text-white">Observer</p>
                    <p className="">
                        Overlook the study and took notes.
                    </p>
                    <p className="mt-[16px] font-semibold !text-white">Technician</p>
                    <p className="">
                        Recorded the study using cameras, microphones and screen recorders.
                    </p>
                </div>
                <img src="images/lab.jpg" alt="UX lab image" className="w-full sm:w-[50%] object-contain px-2 rounded-xl"/>
            </div>
            <p className="mt-[16px] italic">I took on the role as the technician and the facilitator. </p>
            <h2 className='!text-[30px] mt-[60px]'>
                Findings
            </h2>
            <p className="mt-[10px]">
                Overall, participants thought that the website was usable to a certain extent but most users are
 neutral on being regular users. Most dissatisfaction came from inconsistencies within the
 website, assumed technical skills, and the steep learning curve that is required to use the
 website.
            </p>
            <img src="images/yummly/posttest.png" alt="post test questionaire" className="mt-[20px] rounded-xl" />
            
            <p className="mt-[16px]">
                The information flow was inconsistent, particularly with filtering functions that differed between the “browse” and “feeds” pages, leaving many unable to find the filters they needed.
            </p>
            <p className="mt-[16px]">
                Feedback was lacking, as users were unsure if recipes were successfully added to the shopping list, and meal plan options were unresponsive.
            </p>
            <p className="mt-[16px]">
                Recognition was also problematic, with the “save recipe” button’s unclear “yum” label causing confusion and task abandonment
            </p>
            <p className="mt-[16px]">
                Efficiency received mixed feedback: while some appreciated the variety of filters, others found them redundant and unintuitive.
            </p>
            <p className="mt-[16px]">
                Finally, mapping showed both strengths and weaknesses. Participants valued the step-by-step guide for its clarity and interactivity, but navigation was hindered by intrusive ads, cluttered sections, poor content placement, and overwhelming amounts of information, making tasks harder to complete.
            </p>
            
            <h2 className='!text-[30px] mt-[60px]'>
                Recommendations
            </h2>
            <p className="mt-[10px]">
                It is recommended to replace the logo with a standard save icon (e.g., a bookmark), label it clearly, and add stronger visual or audio feedback to indicate successful saving.
            </p>
            <p className="mt-[16px]">
                Consolidating search into one universal, highly visible search bar with integrated filters available upfront would improve efficiency, consistency, and user control.
            </p>
            <p className="mt-[16px]">
                Adding explicit labels to buttons, improving the visibility of guidance, and incorporating stronger onboarding or instructional aids would enhance clarity, align with user expectations, and improve learnability.
            </p>
            <div className="flex mt-[60px] sm:items-center">
                <h2 className='!text-[30px]'>Links:</h2>
                    <div className="flex flex-col sm:flex-row h-auto mx-[10px]">  
                        <a href="https://drive.google.com/file/d/1nWnwtaoKnlkGvoD8qHYz30HqrENxjoEy/view?usp=drive_link" target="_blank" className="flex justify-center mx-[10px] mb-[10px] sm:mb-0">
                            <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white "><h4>Full Report 1</h4></Button>
                        </a>
                        <a href="https://drive.google.com/file/d/1RYtxWK2XPUFWq6LmXFWnLgv3D9tdLh5P/view?usp=sharing" target="_blank" className="flex justify-center mx-[10px]">
                            <Button variant="outline" className=" hover:bg-[#1e1e1e] hover:border hover:border-input text-[#1e1e1e] hover:text-white"><h4>Full Report 2</h4></Button>
                        </a>                      
                    </div>
            </div>
        <div className="mt-[80px]"></div>
        </div>
        
        </section>
        </>

    )
}