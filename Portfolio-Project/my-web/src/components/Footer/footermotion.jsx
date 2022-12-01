const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]}

export const sd = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay:0.2,
        ease:"linear",
      }, 
    },
     hidden: {
      opacity: 0,
      y:20,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
     },
     animate: {
        y: [0,-2,-10,-2,0],
        x: 0,
        opacity:1,
        transition: {
          type: "spring",
          delay: 0.5,
          duration:1.5,
          ease:"linear",
          repeat:Infinity,
        }, 
     },
  };

  export const firstname = {
    visible:{
      y:0,
      opacity:1,
    },
    hidden:{
      y:-20,
      opacity:0,
      transition:{
        delayChildren:0.4,
        staggerChildren:0.02,
        staggerDirection:-1,
      },
    },
  };

  export const child1 = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration:1,
        delay:0.5,
      }, 
    },
     hidden: {
      opacity: 0,
      y: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
     },
  };

  export const child2 = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration:1,
        delay:0.5,
      }, 
    },
     hidden: {
      opacity: 0,
      y: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
     },
  };