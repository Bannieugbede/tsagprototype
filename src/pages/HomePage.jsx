import { useEffect, useState } from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import DownloadModal from "../components/DownloadModal";
import ThankYouModal from "../components/ThankYouModal";
import EventsSection from "../components/EventsSection";
import WeddingCelebration from "../components/WeddingCelebration";

const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    let hash = url.hash;

    if (hash === "#thanks") {
      setActiveModal("thankYou");
    } else {
      const searchParams = url.searchParams;
      const status = searchParams.get("status");
      const transactionId = searchParams.get("transaction_id");
      const referrer = document.referrer;

      const allowedReferrers = [
        "flutterwave",
        "https://sandbox.flutterwave.com/pay/",
        "https://ravesandboxapi.flutterwave.com/",
      ];

      const isAllowedReferrer = allowedReferrers.some((allowedRef) => referrer.includes(allowedRef));

      if (status === "successful" && transactionId && isAllowedReferrer) {
        if (hash === "#mandatedownload") {
          setActiveModal("mandate");
        } else if (hash === "#powerdownload") {
          setActiveModal("power");
        } else if (hash === "#wisdomdownload") {
          setActiveModal("wisdom");
        } else if (hash === "#growthdownload") {
          setActiveModal("growth");
        }
      }
    }
  }, []);

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <EventsSection />
        <WeddingCelebration />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />

      {activeModal === "mandate" && (
        <DownloadModal isOpen={true} onClose={closeModal} title="Mandate Download" fileName="mandate.pdf" />
      )}
      {activeModal === "power" && (
        <DownloadModal isOpen={true} onClose={closeModal} title="Power Download" fileName="power.pdf" />
      )}
      {activeModal === "wisdom" && (
        <DownloadModal isOpen={true} onClose={closeModal} title="Wisdom Download" fileName="wisdom.pdf" />
      )}
      {activeModal === "growth" && (
        <DownloadModal isOpen={true} onClose={closeModal} title="Personal Growth Download" fileName="growth.pdf" />
      )}
      {activeModal === "thankYou" && <ThankYouModal isOpen={true} onClose={closeModal} />}
    </>
  );
};

export default HomePage;
