import React, { useState, useEffect, useRef } from "react";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="w-full py-2 bg-white mt-[6svh]">
      <div className="text-center text-black text-lg">
        <p className="cursor-pointer" onClick={openModal}>vortex🧑‍💻</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            ref={modalRef}
            className="bg-white p-5 rounded-lg w-[250px]"
          >
            <h2 className="text-center text-lg">Don't try to catch me.😉</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
