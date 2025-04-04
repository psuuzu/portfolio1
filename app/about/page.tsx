
import Line from "@/components/line"

export default function Page(){
    return(
        <>
        <section className="h-auto w-[100vw] flex justify-center items-center">
         
                <div className="flex flex-col sm:flex-row items-center justify-center">
               
                    <div className="w-[80vw] sm:w-[42vw] lg:w-[30vw] flex flex-col">
                        <h1 className='text-[40px] md:text-[50px] pr-1'>Paul Su</h1>
                        <p className="mt-[20px] hidden sm:block pr-[10px]">I'm a UI/UX Designer with a background in User Experience Design from the University of Melbourne. I am experienced with Figma for wireframing and prototyping as well as photoshop for visual designs. I am trying to expand my front end development abilities to bring my designs to life</p>
                        <p className="hidden sm:block pr-[10px] mt-[16px]"> in my free time (if i get any) I enjoy exploring visual arts, playing piano and guitar, and surfing.</p>
                    </div>
                    <div className="w-[80vw] sm:w-[42vw] lg:w-[30vw] h-[70vw] sm:h-[34vw] lg:h-[20vw] rounded-xl overflow-hidden">
                        <img src="/images/surf.jpg" alt="surf pic" className="h-full w-full object-cover scale-150"/>
                    </div>
                    <div className="w-[80vw] block sm:hidden">
                    <p className="mt-[20px] ">I'm a UI/UX Designer with a background in User Experience Design from the University of Melbourne. I am experienced with Figma for wireframing and prototyping as well as photoshop for visual designs. I am trying to expand my front end development abilities to bring my designs to life</p>
                    <p className="mt-[16px]"> in my free time (if i get any) I enjoy exploring visual arts, playing piano and guitar, and surfing.</p>
                    </div>

                </div>
            <div>
            <Line></Line>
                <div className="w-[80vw] sm:w-[84vw] lg:w-[60vw] flex flex-row items-center  mt-[40px]">
                        <h2 className='text-[20px] md:text-[24px]'>Contacts</h2>
                    <   p className="ml-[20px]">psuuzu@gmail.com</p>
                </div>
            </div>
       
      
            
        </section>

        </>
    )
}