import React, { useState } from "react";
import { appyourself, check, growth, mandate, wisdom } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import CatalogModal from "./CatalogModal";

const PricingList = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const books = [
    {
      id: "mandate",
      image: mandate,
      title: "THE WOMAN'S MANDATE",
      description: "Description for Mandate book.",
      price: 2000,
      link: "https://sandbox.flutterwave.com/pay/mandatetsag",
    },
    {
      id: "power",
      image: appyourself,
      title: "APPRECIATE YOURSELF",
      description: "Description for Appreciate Yourself book.",
      price: 2500,
      link: "https://sandbox.flutterwave.com/pay/powertsag",
    },
    {
      id: "wisdom",
      image: wisdom,
      title: "THE FORCES OF WISDOM",
      description: "Description for Wisdom book.",
      price: 3000,
      link: "https://sandbox.flutterwave.com/pay/wisdomtsag",
    },
    {
      id: "growth",
      image: growth,
      title: "PRAYER POINTS FOR PERSONAL GROWTH",
      description: "Description for Growth book.",
      price: 3000,
      link: "https://sandbox.flutterwave.com/pay/growthtsag",
    },
  ];

  const openCatalog = () => {
    setIsCatalogOpen(true);
  };

  const closeCatalog = () => {
    setIsCatalogOpen(false);
  };

  return (
    <>
      <div className="flex gap-[1rem] max-lg:flex-wrap">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4">{item.title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>

            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">₦</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>

            <Button
              className="w-full mb-6"
              onClick={openCatalog}
              white={!!item.price}
            >
              {item.price ? "BUY NOW" : "Contact us"}
            </Button>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <CatalogModal isOpen={isCatalogOpen} onClose={closeCatalog} items={books} />
    </>
  );
};

export default PricingList;
