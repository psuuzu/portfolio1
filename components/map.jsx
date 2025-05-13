import { Button } from "./ui/button"

export default function Map(){
    return(
        <div className="flex-1 flex mt-[10px]">
            <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-start w-[95vw]">
                
                    <img src="/images/map.png" alt="map illustration" className="max-w-[50vw] max-h-[50vh] h-auto w-auto object-cover hidden sm:block"/>
                    <div className="w-[75vw] h-[28vh] overflow-hidden sm:hidden">
                            <img src="/images/map.png" alt="map illustration" className="w-full h-full object-cover object-top sm:hidden"/>
                    </div>
                <div className="">
                    <div>
                        <div className="flex items-center">
                            <h2 className="text-[22px]">Route</h2>
                            <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                                <h2 className="text-[20px] !text-black">01</h2>
                            </div>
                            <p className="!text-[18px]">to User Experience design</p>
                        </div>
                        <img src="/images/route1.png" className="w-[70vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] h-auto my-[10px] max-w-[300px]"/>
                            <Button variant="outline" className=" hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4 className="!text-[14px]">View Projects</h4></Button>                        
                    </div>
                    <div className="mt-[20px]">
                        <div className="flex items-center">
                            <h2 className="text-[22px]">Route</h2>
                            <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                                <h2 className="text-[20px] !text-black">02</h2>
                            </div>
                            <p className="!text-[18px]">to Front-end Interactions</p>
                        </div>
                            <img src="/images/route1.png" className="w-[70vw] sm:w-[35vw] md:w-[30vw] lg:w-[25vw] h-auto my-[10px] max-w-[300px]"/>
                            <Button variant="outline" className=" hover:bg-black hover:border hover:border-input text-black hover:text-white"><h4 className="!text-[14px]">View Projects</h4></Button>                        

                        {/* image and button goes here         */}
                    </div>
                    <div className="mt-[20px]">
                        <div className="flex items-center">
                            <h2 className="text-[22px]">Route</h2>
                            <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                                <h2 className="text-[20px] !text-black">03</h2>
                            </div>
                            <p className="!text-[18px]">to Visual Design</p>
                        </div>
                        <p>Under Construction</p>
                        {/* image and button goes here         */}
                    </div>
                </div>
                
            </div>           
      </div> 
    )
}