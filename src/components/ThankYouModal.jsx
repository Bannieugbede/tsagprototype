// src/components/ThankYouModal.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-11/12 max-w-md mx-auto shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center">
          <FaHeart className="text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600">
            Thank you for your donation. Your support is greatly appreciated!
          </p>
          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
