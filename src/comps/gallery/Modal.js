import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      exit={{opacity: 0}}
      onClick={(e) => handleClick(e)}
      className="backdrop"
    >
      <img src={selectedImg} alt="" />
    </motion.div>
  );
};

export default Modal;
