'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import  Movement  from "@/components/movement";
import  Inbound  from "@/components/redesign";
import Tap2heal from "@/components/tap2heal";
import Line from "@/components/line";
import Surroundsound from "@/components/surroundsound";
import Dscweb from "@/components/dscweb";
import Redesign from "@/components/redesign";
import Loading from "@/components/ui/loading"

export default function Home() {
  const router = useRouter()
  return (
    <>
  
    {/* title */}
    <section className="h-[80vh] sm:h-[85vh] flex flex-col justify-center" >
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[47vw] sm:w-[30vw] lg:w-[20vw] flex">
         <h1 className='text-[40px] md:text-[50px] text-right pr-1'>Welcome to Paul's Portfolio</h1>
        </div>
        <div className='w-[47vw] sm:w-[30vw] md:w-[20vw] lg:w-[18vw] flex h-auto'>
         <p className="text-[16px] pl-1">I am a  UX/UI designer who has an interest in front end development and visual arts. I enjoy creating user-centered solutions</p>
        </div>
        {/* space above animation / title */}
      </div> 
      <div className='flex justify-center h-auto'>
      <img src="/images/anim8c.gif" alt="gif" className='w-[90vw] sm:w-[55vw] lg:w-[40vw]'/>
      {/* animation */}
      </div>
    </section>
      

      <section className='flex justify-center'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
          <h2 className='text-[26px] md:text-[30px] mt-[60px]'>Javascript Animation</h2>
          <h3 className=" text-gray-600 mb-[15px]">Front End | Personal Project | 2024</h3>
          <p>Mixing pixel art and animation mechanics with vanila Javascript, Html and Css.</p>
          <div className="flex justify-center">
          <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white" onClick={() => router.push("javascript")}><h4>View more</h4></Button>
          </div>
          <Line></Line>
          <Surroundsound></Surroundsound>
          <Line></Line>
          <Tap2heal></Tap2heal>
          <Line></Line>
          <Redesign></Redesign>
          <Line></Line>
          <Dscweb></Dscweb>
          <Line></Line>
          <Movement></Movement>
          <Line></Line>
          <div className="mt-[80px]"></div>
          <Loading></Loading>
       
          <div className="w-full flex justify-center mt-[40px]">
            <a href="#top"><p>More great things to come... back to top ↑</p></a>
          </div>
          <div className="mt-[80px]"></div>
          
        </div>
      </section>
   
    </>
  );
}
