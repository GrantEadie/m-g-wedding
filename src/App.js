import React from "react";
import Main from "./comps/main/Main";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <Main />
    </motion.div>
  );
}

export default App;
