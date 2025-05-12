import { Button } from "@/components/ui/button";

export default function Ani(){
    return(
        <section>
             <h2 className='text-[26px] md:text-[30px] mt-[60px]'>Javascript Animation</h2>
            <h3 className=" text-gray-600 mb-[15px]">Front End | Personal Project </h3>
            <p>Mixing pixel art and animation mechanics with vanila Javascript, Html and Css.</p>
            <div className="flex justify-center">
            <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white" onClick={() => router.push("javascript")}><h4>View more</h4></Button>
            </div>
        </section>
    )
}