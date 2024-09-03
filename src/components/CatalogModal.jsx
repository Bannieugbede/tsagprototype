import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Assuming you're using react-icons

const CatalogModal = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  // Function to close the modal when clicking outside of it
  const handleClickOutside = (e) => {
    if (e.target.id === "catalog-modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="catalog-modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 pt-[6rem] overflow-y-auto"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-[600px] relative shadow-lg max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-center mb-4">
          <FaShoppingCart className="text-blue-600 text-3xl mr-2" />
          <h2 className="text-2xl text-black font-bold text-center">Book Catalog</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl text-black font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="text-lg font-bold mb-4">₦{item.price}</div>
              <a
                href={item.link}
                className="mt-auto bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                BUY NOW
              </a>
            </div>
          ))}
        </div>

        {/* Close Button at the Bottom Right */}
        <button
          className="fixed bottom-8 right-8 bg-red-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-red-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CatalogModal;
