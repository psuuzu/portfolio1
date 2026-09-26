import Line from "@/components/line"
import Social from "@/components/ui/social"

export default function About() {
    return (
        <section>
            <h1 className='text-[40px] md:text-[50px] mt-[60px]'>About</h1>   
            <p className="mt-[20px]">
                I am a UX designer with a passion for creating intuitive solutions that bridge the gap between people and technology. My work combines visual appeal with research and principles. 
            </p>
            <p className="mt-[16px]">
            I grew up with a background in visual arts and an interest in technology. This has led me to work between the two, where UX design became a creative outlet with purpose and impact. I find it especially satisfying to see my ideas come to life as experiences people use. 
            </p>
            <p className="mt-[16px]">
                In my free time (if i get any) I enjoy playing music, and surfing.
            </p>
            <Line></Line>
            <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center mt-[40px]">
                <div className="flex flex-row items-center mb-[5px] sm:m-0">
                    <h2 className='text-[20px] md:text-[24px]'>Contacts</h2>
                    <p className="ml-[20px]">psuuzu@gmail.com</p>
                </div>
                <div className="mt-[20px] sm:mt-0">
                    <Social></Social>
                </div>
            </div>
            <div className="h-[100px]"></div>
          
            
        </section>
    )
}