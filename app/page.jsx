'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import  Movement  from "@/components/movement";
import  Inbound  from "@/components/lab";
import Tap2heal from "@/components/tap2heal";
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
      <Fadein><Lab /></Fadein>
      <Line />
      <Fadein><Dscweb /></Fadein>
      <Line />
      <Footer></Footer>
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
      <Footer></Footer>
    </>
  );
}

  return (
    <>
  
    {/* title */}
    <section className="h-[85vh] sm:h-[88vh] flex flex-col justify-center bg-black z-50" >
        <div className="flex-1 flex justify-center items-center">
          <Landing project={project} setProject={setProject} showSecondDiv={showSecondDiv} setShowSecondDiv={setShowSecondDiv}></Landing>      
        </div>
      <div className='flex justify-center h-auto'>
      <img src="/images/anim8c.gif" alt="gif" className='max-w-[90vw] max-h-[30vh] sm:max-w-[500px] w-auto'/>
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
