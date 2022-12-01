
export const container = {
    hidden: {opacity : 0},
    visible: (i = 1) => ({
      opacity: 1,
      tansition: {staggerchildren: 40, delayChildren: 40}
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
      }, 
    },
     hidden: {
      opacity: 0,
      y: -20,
      x: 20,
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
      }, 
    },
     hidden: {
      opacity: 0,
      y: -20,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
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

  export const child4 = {
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
      y:20,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
     },
  };

  export const child5 = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 1,
        x: { duration: .5 },
        default: { ease: "easeIn" },
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

  export const child6 = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 1,
        x: { duration: .5 },
        default: { ease: "easeIn" },
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

  export const child7 = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 1.5,
        x: { duration: .5 },
        default: { ease: "easeIn" },
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
      opacity: 1,
        y: [0,2,10,2,0],
        x: 0,
        transition: {
          type: "spring",
          delay: 0.2,
          duration:1.5,
          ease:"linear",
          repeat:Infinity,
        }, 
     },
  };


