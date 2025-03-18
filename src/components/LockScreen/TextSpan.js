import { motion } from "framer-motion";

const TextSpan = ({ children }) => {
  const rubberBand = () => {
    return {
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.1, .95, 1)",
        "scale3d(.90,1.15,1)",
        "scale3d(1.15,.95,1)",
        "scale3d(.95,.1.05,1)",
        "scale3d(1,1,1)",
      ],
    };
  };

  return <motion.span whileHover={() => rubberBand()}>{children}</motion.span>;
};
export default TextSpan;
