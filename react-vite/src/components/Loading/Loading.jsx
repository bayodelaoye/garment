import "./Loading.css";
import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="loading-container">
        <div className="circle-container">
          <motion.span
            className="circle"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "linear",
            }}
          />
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
