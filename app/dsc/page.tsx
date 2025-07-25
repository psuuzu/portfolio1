export default function Dsc(){
    return(
        <>
            <section className="h-[620px] sm:h-[100vh]">
                <video src="/videos/newdsc.mp4" autoPlay muted loop className="object-cover h-full object-[75%_center]"/>
            </section>
            <section className='flex justify-center bg-[#1e1e1e]'>
                <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>
                    <p className="!text-[20px] mt-[60px] !text-white">
                        This website rebrand project aimed to improve the club’s online presence by removing distracting content, highlighting key information and aligning the design with the club’s identity. 
                    </p>
                    <p className="mt-[20px]">
                        Led website analysis, and ideation, presented concepts to the club committee, and gathered feedback. I also collaborated with team members to develop wireframes and build prototypes.
                    </p>

                    <section className="flex flex-col sm:flex-row mt-[60px]">
                        <h2 className='!text-[30px]'>
                            Problem
                        </h2>
                        <div className="h-auto mx-[18px]">            
                            <ul className="list-disc pl-[10px] space-y-[20px]">
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Generic AI generated images</h2>
                                    <p>Current website uses irrelevant AI generated images that does not contribute to enhancing user understanding</p>
                                </li>
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Unorganized information</h2>
                                    <p>There are irrelevant information that distracts users from key sections</p>
                                </li>     
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Bland design</h2>
                                    <p>The club’s brand image is not represented through the current website</p>
                                </li>
                            </ul> 
                        </div>
                    </section>
                    <section className="flex flex-col sm:flex-row mt-[60px]">
                        <h2 className='!text-[30px]'>
                            Solution
                        </h2>
                        <div className="h-auto mx-[18px]">
                            <ul className="list-disc pl-[10px] space-y-[20px]">
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Visualizer embedding</h2>
                                    <p>This interactive tool lets users explore how words relate to each other using high-dimensional embeddings, projected into 3D space</p>
                                </li>
                                <li>
                                <h2 className='!text-[26px] text-[rgb(200,200,200)]'>aesthetic redesign</h2>
                                    <p>Redesigned layout, style and colour palette to better fit club's brand image</p>
                                </li>     
                                <li>
                                    <h2 className='!text-[26px] text-[rgb(200,200,200)]'>Information restructuring</h2>
                                    <p>removing fillers and merging similar sections makes information more cohesive and impactful</p>
                                </li>
                            </ul>
                        </div>     
                    </section>
                </div>
            </section>
        </>
    )
}