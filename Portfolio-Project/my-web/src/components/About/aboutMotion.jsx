export const container = {
    hidden: {opacity : 0},
    visible: (i = 1) => ({
      opacity: 1,
      tansition: {staggerchildren: 0.5, delayChildren: 0.5}
    }),
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
        delay: .2,
        x: { duration: 2 },
        default: { ease: "linear" },
      }, 
    },
     hidden: {
      opacity: 0,
      y: -20,
      x: 0,
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
        delay: .2,
        duration:2,
      }, 
    },
     hidden: {
      opacity: 0,
      y: -20,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
     },
     animate: {
      opacity:1,
        rotate:[0,5,0,-5,0],
        transition:{
            duration:3,
            delay:0.5,
            bounce:0.4,
            repeat:Infinity,
        },
     },
  };

  export const child3 = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: .2,
        x: { duration: 2 },
        default: { ease: "linear" },
      }, 
    },
     hidden: {
      opacity: 0,
      y: 20,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
     },
  };