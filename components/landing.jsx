import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Title from './title';
import Map from './map';

export default function Landing() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const divVariants = {
    initial: (direction) => ({
      y: direction === 'in' ? '100%' : 0,
      x: 0,
      opacity: 0,
    }),
    exit: (direction) => ({
      y: direction === 'out' ? '-100%' : 0,
      x: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
       transition: { duration: 0.3, delay: 0.3 }
    },

  };

  let content;

  if (!showSecondDiv) {
    content = (
      <motion.div
        key="first"
        custom="out"
        variants={divVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className='absolute'
      >
        <Title></Title>
        <div  className='flex justify-center'>
        <Button variant="outline" className="mt-[20px] hover:bg-black hover:border hover:border-input text-black hover:text-white" onClick={() => setShowSecondDiv(true)} ><h4>Start</h4></Button>
        </div>
      </motion.div>
    );
  } else {
    content = (
      <motion.div
        key="second"
        custom="in"
        variants={divVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className='absolute'
      >
        <Map></Map>
       
      </motion.div>
    );
  }

  return (

      <AnimatePresence className="relative w-full h-auto overflow-hidden">
      
            {content}
      
      
      </AnimatePresence>
  );
}
