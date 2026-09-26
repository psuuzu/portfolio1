import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Ani(){
    const router = useRouter()
    return(
        <section>
             <h2 className='text-[26px] md:text-[30px] mt-[60px]'>Javascript Animation</h2>
            <h3 className=" text-gray-600 mb-[15px]">Front End | Personal Project </h3>
            <p>Mixing pixel art and animation mechanics with vanila Javascript, Html and Css.</p>
            <div className="flex justify-center">
            <a href="https://github.com/psuuzu/animation" target="_blank">
                <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4>Github</h4></Button>
            </a>
            </div>
        </section>
    )
}