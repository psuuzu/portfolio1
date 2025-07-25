'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import  Movement  from "@/components/movement";
import  Inbound  from "@/components/redesign";
import Tap2heal from "@/components/tap2heal";
import Line from "@/components/line";
import Surroundsound from "@/components/surroundsound";
import Dscweb from "@/components/dscweb";
import Redesign from "@/components/redesign";
import Loading from "@/components/ui/loading";
import Fadein from "@/components/ui/fadein";
import Ani from "@/components/ani"; 
import Title from "@/components/title";
import Map from "@/components/map"; 
import Landing from "@/components/landing";
import Portf from "@/components/portf"
import { useState, useEffect } from 'react';



export default function Home() {
  const router = useRouter()
  const [project, setProject] = useState("none")
    const [showSecondDiv, setShowSecondDiv] = useState(false);

    //set state on load
    useEffect(() => {
    const storedShow = sessionStorage.getItem("showSecondDiv");
    if (storedShow === "true") {
      setShowSecondDiv(true);
    }else{
      setShowSecondDiv(false)
    }
  }, []);

   // Save state to sessionStorage on change
  useEffect(() => {
    sessionStorage.setItem("showSecondDiv", showSecondDiv);
  }, [showSecondDiv]);

  //set state on load
    useEffect(() => {
    const storedProject = sessionStorage.getItem("project");
      setProject(storedProject);
  }, []);

  // Store to sessionStorage on change
  useEffect(() => {
      sessionStorage.setItem("project", project);
  }, [project]);



  //scrolling when project is clicked
   useEffect(() => {
    if (project === "ux") {
      window.scrollTo({
        top: window.innerHeight, 
        behavior: "smooth", 
      });
    }
  }, [project]);

  useEffect(() => {
    if (project === "ui") {
      window.scrollTo({
        top: window.innerHeight/2, 
        behavior: "smooth", 
      });
    }
  }, [project]);


  let projectcontent;

if (project === "ux") {
  projectcontent = (
    <>
      <div className="mt-[60px]"></div>
      <Fadein><Surroundsound /></Fadein>
      <Line />
      <Fadein><Tap2heal /></Fadein>
      <Line />
      <Fadein><Redesign /></Fadein>
      <Line />
      <Fadein><Dscweb /></Fadein>
      <Line />
      <div className="mt-[60px]"></div>
      <Loading />
      <div className="w-full flex justify-center mt-[60px]">
        <a href="#top"><p>More great things to come... back to top ↑</p></a>
      </div>
    </>
  );
} else if (project === "ui") {
  projectcontent = (
    <>
      <Fadein><Ani /></Fadein>
      <Line />
      <Fadein><Movement /></Fadein>
      <Line />
      <Fadein><Portf/></Fadein>
      <Line />
      <div className="mt-[60px]"></div>
      <Loading />
      <div className="w-full flex justify-center mt-[60px]">
        <a href="#top"><p>More great things to come... back to top ↑</p></a>
      </div>
    </>
  );
}

  return (
    <>
  
    {/* title */}
    <section className="h-[85vh] sm:h-[88vh] flex flex-col justify-center" >
        <div className="flex-1 flex justify-center items-center">
          <Landing project={project} setProject={setProject} showSecondDiv={showSecondDiv} setShowSecondDiv={setShowSecondDiv}></Landing>      
        </div>
      {/* <div className="flex justify-center">
          <p className="!text-[14px] opacity-55">built with react and tailwind css</p>
      </div> */}
      <div className='flex justify-center h-auto'>
      <img src="/images/anim8c.gif" alt="gif" className='max-w-[90vw] max-h-[30vh] sm:max-w-[500px] w-auto '/>
      </div>  
    </section>
      

      <section className='flex justify-center'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto'>    
          
          {projectcontent}
          <div className="mt-[60px]"></div>
          
        </div>
      </section>
   
    </>
  );
}
