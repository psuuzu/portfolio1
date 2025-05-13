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
import Loading from "@/components/ui/loading";
import Fadein from "@/components/ui/fadein";
import Ani from "@/components/ani"; 
import Title from "@/components/title";
import Map from "@/components/map"; 
import Landing from "@/components/landing";



export default function Home() {
  const router = useRouter()
  return (
    <>
  
    {/* title */}
    <section className="h-[80vh] sm:h-[85vh] flex flex-col justify-center" >
        <div className="flex-1 flex justify-center items-center">
          <Landing></Landing>      
        </div>
      
      {/* map or title or landing */}
      <div className='flex justify-center h-auto'>
      <img src="/images/anim8c.gif" alt="gif" className='max-w-[90vw] max-h-[30vh] sm:max-w-[70vw] w-auto'/>
      {/* animation */}
      </div>
    </section>
      

      <section className='flex justify-center'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
          <Fadein>
            <Ani></Ani>
          </Fadein>
          
          
          <Line></Line>
          <Fadein><Surroundsound></Surroundsound></Fadein>
          <Line></Line>
          <Fadein><Tap2heal></Tap2heal></Fadein>
          <Line></Line>
          <Fadein><Redesign></Redesign></Fadein>
          <Line></Line>
          <Fadein><Dscweb></Dscweb></Fadein>
          <Line></Line>
          <Fadein><Movement></Movement></Fadein>
          <Line></Line>
      
          <div className="mt-[60px]"></div>
          <Loading></Loading>
       
          <div className="w-full flex justify-center mt-[60px]">
            <a href="#top"><p>More great things to come... back to top ↑</p></a>
          </div>
          <div className="mt-[60px]"></div>
          
        </div>
      </section>
   
    </>
  );
}
