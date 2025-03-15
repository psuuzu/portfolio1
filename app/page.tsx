import { Button } from "@/components/ui/button";
import  Movement  from "@/components/movement";
import  Surrounds  from "@/components/surrounds";

export default function Home() {
  // const parentElement = useRef(null);
  // function up() {
  //   if(parentElement.current){
  //     parentElement.current.appendChild()
  //   }
  // }



  return (
    <>
    {/* title */}
      <div className="h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[35vh] min-w-full flex justify-center items-center">
        <div className="w-[40vw] sm:w-[30vw] md:w-[30vw] flex">
         <h1 className='text-[30px] sm:text-[40px] md:text-[50px] text-right pr-1'>Welcome to Paul's Portfolio</h1>
        </div>
        <div className='w-[40vw] sm:w-[20vw] md:w-[20vw] lg:w-[18vw] flex h-auto'>
         <p className="text-[12px] sm:text-[14px] md:text-[16px] pl-1">Hi, I am a  UX/UI designer who has an interest in front end development. I enjoy creating user-centered digital solutions</p>
        </div>
        {/* space above animation / title */}
      </div> 
      
      <div className='flex justify-center'>
      <img src="/images/anim8c.gif" alt="gif" className='w-[80vw] sm:w-[70vw] md:w-[62vw] lg:w-[55vw]'/>
      {/* animation */}
      </div>

      <section className='flex justify-center'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[50vw] h-auto'>
          <h2 className='text-[18px] sm:text-[20px] md:text-[30px] mt-[60px]'>Javascript Animation</h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-500 mb-[15px]">Front End | Personal Project</p>
          <p className="text-[12px] sm:text-[14px] md:text-[16px]">Mixing pixel art and animation mechanics with vanila javascript, html and css. a project that was fueled through boredom and some free time</p>
          <div className="flex justify-center">
          <Button variant="outline" className="my-[25px] hover:bg-black hover:text-white"><p className="text-[12px] sm:text-[14px] md:text-[16px]">view more</p></Button>
          </div>
          <div className="flex justify-center">
            <hr className="border-t-2 border-gray-600 w-[60vw] mt-[5px]"/>
          </div>
          <Surrounds></Surrounds>
          <div className="flex justify-center">
            <hr className="border-t-2 border-gray-600 w-[60vw] mt-[5px]"/>
          </div>
          <Movement></Movement>
          <div className="flex justify-center">
            <hr className="border-t-2 border-gray-600 w-[60vw] mt-[5px]"/>
          </div>
        </div>
      </section>
   
    </>
  );
}
