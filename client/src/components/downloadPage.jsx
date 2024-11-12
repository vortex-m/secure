import React from "react";
import '../App.css'

const DownloadPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[87.5svh]">
      <div className="text-center p-8 bg-white rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Download Your NeoCollab Folder 😉
        </h2>
        <a
          href="https://secure-25th.onrender.com/downloads/New.zip"
          download
        >
          <button className="download-button">
            Download Folder
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadPage;
