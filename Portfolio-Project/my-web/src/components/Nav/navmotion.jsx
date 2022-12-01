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