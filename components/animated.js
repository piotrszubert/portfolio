import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Animated({ children }) {
  const componentRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      componentRef.current.classList.add("animate");
    } else {
      componentRef.current.classList.remove("animate");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="animated-component"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={componentRef}>{children}</div>
    </motion.div>
  );
};