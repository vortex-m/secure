import React from "react";
import "../App.css";

const DownloadPage = () => {
  return (
    <div className="download-page-container">
      <div className="main-folder">
        <h2 className="download-title">Download Your Neo Collab Folder 😉</h2>
        <a
          href="http://localhost:5000/downloads/thottathukiduven-V2.zip"
          download
        >
          <button className="download-button">Download Folder</button>
        </a>
      </div>
    </div>
  );
};

export default DownloadPage;
