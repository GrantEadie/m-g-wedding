import React, { useState } from "react";
import UploadForm from "../gallery/UploadForm";
import ImageGrid from "../gallery/ImageGrid";
import Modal from "../gallery/Modal";
import { AnimatePresence } from "framer-motion";
import "./gallery.css";


const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="gallery-container">
      <div className="gallery">
        <ImageGrid setSelectedImg={setSelectedImg} />
        <AnimatePresence>
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </AnimatePresence>
        {/* <UploadForm /> */}
      </div>
    </div>
  );
};
export default Gallery;
