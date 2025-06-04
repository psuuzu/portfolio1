
import { Button } from "./ui/button";

export default function Portf(){
    return(
        <div>
            <h2 className='text-[26px] md:text-[30px] mt-[20px]'>Portfolio Website</h2>
            <h3 className="mb-[15px]">Front End | Personal Project</h3>
            <p className="text-[16px]">This responsive portfolio website is built using React, NextJs and TailwindCSS and deployed on Vercel. It showcases my design and development projects, with a focus on clean minimalistic UI and accessibility</p>
            
            <div className="flex justify-center">
                <a href="https://github.com/psuuzu/portfolio1/" target="_blank">
                <Button variant="outline" className="mt-[25px] hover:bg-black hover:border hover:border-input text-black hover:text-white">
                    <h4>Github</h4>
                </Button>
                </a>
            </div>
        </div>
    )
}