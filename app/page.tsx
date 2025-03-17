import { Button } from "@/components/ui/button";
import  Movement  from "@/components/movement";
import  Inbound  from "@/components/Inbound";
import Tap2heal from "@/components/tap2heal";
import Line from "@/components/line";
import Surroundsound from "@/components/surroundsound"

export default function Home() {

  return (
    <>
    {/* title */}
    <section className="h-[80vh] sm:h-[85vh] flex flex-col justify-center">
    <div className="flex-1 flex justify-center items-center">
        <div className="w-[47vw] sm:w-[30vw] lg:w-[20vw] flex">
         <h1 className='text-[40px] md:text-[50px] text-right pr-1'>Welcome to Paul's Portfolio</h1>
        </div>
        <div className='w-[47vw] sm:w-[30vw] md:w-[20vw] lg:w-[18vw] flex h-auto'>
         <p className="text-[16px] pl-1">Hi, I am a  UX/UI designer who has an interest in front end development. I enjoy creating user-centered digital solutions</p>
        </div>
        {/* space above animation / title */}
      </div> 
      <div className='flex justify-center h-auto'>
      <img src="/images/anim8c.gif" alt="gif" className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]'/>
      {/* animation */}
      </div>
    </section>
      

      <section className='flex justify-center'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
          <h2 className='text-[26px] md:text-[30px] mt-[60px]'>Javascript Animation</h2>
          <p className="text-[18px] text-gray-500 mb-[15px]">Front End | Personal Project</p>
          <p className="text-[16px]">Mixing pixel art and animation mechanics with vanila javascript, html and css. a project that was fueled through boredom and some free time</p>
          <div className="flex justify-center">
          <Button variant="outline" className="mt-[25px] hover:bg-black hover:text-white"><p className="text-[16px]">view more</p></Button>
          </div>
          <Line></Line>
          <Surroundsound></Surroundsound>
          <Line></Line>
          <Tap2heal></Tap2heal>
          <Line></Line>
          <Movement></Movement>
          <Line></Line>
          <Inbound></Inbound>
          <Line></Line>
        </div>
      </section>
   
    </>
  );
}
