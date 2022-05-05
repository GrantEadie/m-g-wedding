import React from "react";
import Main from "./comps/main/Main";
import RSVP from "./comps/rsvp/RSVP";
import Header from "./comps/header/Header";
import Lodging from "./comps/lodging/Lodging";
import Registry from "./comps/registry/Registry";
import Schedule from "./comps/schedule/Schedule";
import Weekend from "./comps/weekend/Weekend";
import GuestList from "./comps/guestlist/GuestList";
import Sidebar from "./comps/header/Sidebar";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";
import styled from "styled-components";

const Holder = styled.div`
  padding: 20px 20px;
`;

function App() {
  return (
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        id="outer-container"
      >
        <Sidebar />
        <Holder id="page-wrap">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="rsvp" element={<RSVP />} />
            <Route path="lodging" element={<Lodging />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="registry" element={<Registry />} />
            <Route path="weekend" element={<Weekend />} />
            <Route path="guestlist" element={<GuestList />} />
          </Routes>
        </Holder>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
