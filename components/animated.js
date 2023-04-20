import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Animated({ children, direction = "top" }) {
  const componentRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.2 });

  const initialStyles = {
    opacity: 0,
    [direction === "top" ? "y" : direction === "bottom" ? "y" : "x"]:
      direction === "top" || direction === "left" ? "-100px" : "0px",
  };

  const animateStyles = {
    opacity: 1,
    [direction === "top" ? "y" : direction === "bottom" ? "y" : "x"]: 0,
  };

  useEffect(() => {
    if (inView) {
      componentRef.current.style.opacity = 1;
      componentRef.current.style.transform = "translateY(0)";
    } else {
      componentRef.current.style.opacity = 0;
      componentRef.current.style.transform = `translate${
        direction === "top" || direction === "bottom" ? "Y" : "X"
      }(20px)`;
    }
  }, [inView, direction]);

  return (
    <motion.div
      ref={ref}
      className="animated-component"
      initial={initialStyles}
      animate={animateStyles}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        // opacity: 0,
        transform: inView
          ? `translate${direction === "top" || direction === "bottom" ? "Y" : "X"}(0)`
          : `translate${
              direction === "top" || direction === "bottom" ? "Y" : "X"
            }(-100px)`,
        transition: `transform 0.5s ease-in-out, opacity 0.5s ease-in-out`,
      }}
    >
      <div ref={componentRef}>{children}</div>
    </motion.div>
  );
}