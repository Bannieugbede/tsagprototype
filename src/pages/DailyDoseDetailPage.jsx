import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
import DailyDoseDetail from "../components/daily-dose/DailyDoseDetail";
import LoadingSpinner from "../components/daily-dose/LoadingSpinner";
import ErrorState from "../components/daily-dose/ErrorState";
import { dailyDoseService } from "../services/dailyDoseService";
import { useSEO } from "../hooks/useSEO";

const DailyDoseDetailPage = () => {
  const { slug } = useParams();
  const [devotion, setDevotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useSEO({ title: devotion?.title || "Daily Dose", description: devotion?.devotionalMessage?.slice(0, 150) || "A TSAGO devotional." });

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const result = dailyDoseService.getBySlug(slug);
        if (!result) {
          setError("This devotion could not be found.");
          return;
        }

        setDevotion(result);
      } catch (err) {
        setError(err.message || "Unable to load this devotion.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  if (loading) return <LoadingSpinner label="Loading devotion" />;
  if (error) return <ErrorState title="Devotion unavailable" message={error} />;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-n-8 px-5 py-24 text-n-1 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Link to="/daily-dose" className="mb-6 inline-flex text-sm font-semibold uppercase tracking-[0.3em] text-color-1">
            ← Back to all devotions
          </Link>
          <DailyDoseDetail devotion={devotion} />
        </div>
      </div>
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default DailyDoseDetailPage;
