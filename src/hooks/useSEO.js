import { useEffect } from "react";

export const useSEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | TSAGO Daily Dose` : "TSAGO Daily Dose";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "A daily devotional experience from TSAGO.");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title || "TSAGO Daily Dose");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description || "A daily devotional experience from TSAGO.");
    }
  }, [title, description]);
};
