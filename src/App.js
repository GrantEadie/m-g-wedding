import React from "react";
import Main from "./comps/main/Main";
import RSVP from "./comps/rsvp/RSVP";
import Header from "./comps/header/Header"
import GuestList from "./comps/guestlist/GuestList";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="guestlist" element={<GuestList />} />
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
