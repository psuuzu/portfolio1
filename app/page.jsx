'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import  Movement  from "@/components/movement";
import  Inbound  from "@/components/lab";
import Brutal from "@/components/brutal";
import Line from "@/components/line";
import Surroundsound from "@/components/surroundsound";
import Dscweb from "@/components/dscweb";
import Lab from "@/components/lab";
import Loading from "@/components/ui/loading";
import Fadein from "@/components/ui/fadein";
import Ani from "@/components/ani"; 
import Title from "@/components/title";
import Map from "@/components/map"; 
import Landing from "@/components/landing";
import Portf from "@/components/portf"
import Footer from "@/components/ui/footer";
import About from "@/components/about";
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



  //scrolling when project and about is clicked
   useEffect(() => {
    if (project === "ux" || project === "about") {
      window.scrollTo({
        top: window.innerHeight, 
        behavior: "smooth", 
      });
    }
  }, [project]);

  useEffect(() => {
    if (project === "create") {
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
      <div className="h-[20px]"></div>
      <Fadein><Surroundsound /></Fadein>
      <Line />
      <Fadein><Brutal /></Fadein>
      <Line />
      <Fadein><Lab /></Fadein>
      <Line />
      <Fadein><Dscweb /></Fadein>
      <Line />
      <Footer></Footer>
    </>
  );
} else if (project === "create") {
  projectcontent = (
    <>
      <Fadein><Ani /></Fadein>
      <Line />
      <Fadein><Movement /></Fadein>
      <Line />
      <Fadein><Portf/></Fadein>
      <Line />
      <Footer></Footer>
    </>
  );
} else if (project === "about") {
  projectcontent = (
    <>
      <div className="h-[20px]"></div>
      <Fadein><About /></Fadein>
    </>
  );
}

  return (
    <>
    <div className="h-[40px]" id="top"></div>
    {/* title */}
    <section className="h-[85vh] sm:h-[88vh] flex flex-col justify-center bg-black z-50" >
        <div className="flex-1 flex justify-center items-center">
          <Landing project={project} setProject={setProject} showSecondDiv={showSecondDiv} setShowSecondDiv={setShowSecondDiv}></Landing>      
        </div>
      <div className='flex justify-center h-auto'>
      <img src="/images/anim8c.gif" alt="gif" className='max-w-[90vw] max-h-[30vh] sm:max-w-[500px] w-auto select-none pointer-events-none'/>
      </div>  
    </section>

      <section className='flex justify-center'>
        <div className='w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-auto z-40 bg-black'>    
          
          {projectcontent}
          
       
        </div>
      </section>
   
    </>
  );
}
