import { Button } from "./ui/button"

export default function Map(){
    return(
     
        <div className="flex flex-1 justify-center items-center w-[95vw] mt-[10px] h-full">
            {/* <section className="h-[300px] mr-[25px]">
                <img src="/images/map.png" className="object-contain h-full w-full"/>
            </section> */}
            <section className="flex flex-col h-full">
                <div>
                    <div className="flex items-center">
                        <h2 className="text-[20px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[20px] !text-black">01</h2>
                        </div>
                        <p className="!text-[18px]">to User Experience design</p>
                    </div>
                    <img src="/images/route1.png" className="w-[70vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] h-auto max-w-[300px] my-[5px]"/>
                        <Button variant="outline" className=" hover:bg-black hover:border hover:border-input text-black hover:text-white scale-90"><h4>View Projects</h4></Button>                        
                </div>
                <div className="mt-[4vh]">
                    <div className="flex items-center">
                        <h2 className="text-[20px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[20px] !text-black">02</h2>
                        </div>
                        <p className="!text-[18px]">to Front-end Interactions</p>
                    </div>
                        <img src="/images/route2.png" className="w-[70vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] h-auto max-w-[300px] my-[5px]"/>
                        <Button variant="outline" className=" hover:bg-black hover:border hover:border-input text-black hover:text-white scale-90"><h4>View Projects</h4></Button>                        

                    {/* image and button goes here         */}
                </div>
                <div className="mt-[4vh] opacity-60">
                    <div className="flex items-center">
                        <h2 className="text-[20px]">Route</h2>
                        <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                            <h2 className="text-[20px] !text-black">03</h2>
                        </div>
                        <p className="!text-[18px]">to Visual Design</p>
                    </div>
                    <p>Under Construction</p>
                    {/* image and button goes here         */}
                </div>
            </section>
                
        </div>           
    )
}