import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid"; // Use a shopping cart icon

const UnauthorizedAccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center hover:bg-blue-600"
        onClick={onClose}
      >
        <ShoppingCartIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default UnauthorizedAccessModal;
