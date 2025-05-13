export default function Map(){
    return(
        <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col sm:flex-row sm:justify-center items-center w-[95vw]">
                
                    <img src="/images/map.png" alt="map illustration" className="max-w-[50vw] max-h-[50vh] h-auto w-auto object-cover hidden sm:block"/>
                    <div className="w-[75vw] h-[28vh] overflow-hidden sm:hidden">
                            <img src="/images/map.png" alt="map illustration" className="w-full h-full object-cover object-top sm:hidden"/>
                    </div>
        
                <div>
                    <div>
                        <div className="flex items-center">
                            <h2 className="text-[22px]">Route</h2>
                            <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                                <h2 className="text-[20px] !text-black">01</h2>
                            </div>
                            <p className="!text-[18px]">to User Experience design</p>
                        </div>
                    
                            <img src="/images/route1.png" className="w-[79vw h-auto"/>
                     
                        
                        {/* image and button goes here         */}
                    </div>
                    <div>
                        <div className="flex items-center">
                            <h2 className="text-[22px]">Route</h2>
                            <div className="bg-white rounded-sm px-[5px] mx-[5px]">
                                <h2 className="text-[20px] !text-black">02</h2>
                            </div>
                            <p className="!text-[18px]">to Front-end Interactions</p>
                        </div>
                        {/* image and button goes here         */}
                    </div>
           
                </div>
                
            </div>           
      </div> 
    )
}