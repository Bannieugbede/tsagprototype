import React, { useEffect, useState } from "react";
import { XMarkIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid"; // Close and Download icons

const DownloadModal = ({ isOpen, onClose, title, fileName }) => {
  const [originalTitle, setOriginalTitle] = useState(document.title);

  useEffect(() => {
    if (isOpen) {
      document.title = title;
    } else {
      document.title = originalTitle;
    }

    return () => {
      document.title = originalTitle;
    };
  }, [isOpen, originalTitle, title]);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal when clicking outside of the modal content
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl text-black font-bold mb-4">Purchase Successful!</h2>
        <p className="text-black">Click the button below to download your book.</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          onClick={() => window.location.href = `./${fileName}`}
        >
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          Download Now
        </button>
      </div>
    </div>
  );
};

export default DownloadModal;
