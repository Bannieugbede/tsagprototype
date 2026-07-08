import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
import DailyDoseList from "../components/daily-dose/DailyDoseList";
import LoadingSpinner from "../components/daily-dose/LoadingSpinner";
import ErrorState from "../components/daily-dose/ErrorState";
import { dailyDoseService } from "../services/dailyDoseService";
import { useSEO } from "../hooks/useSEO";

const DailyDosePage = () => {
  const [devotions, setDevotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useSEO({ title: "Daily Dose", description: "A beautiful devotional experience from TSAGO." });

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const response = dailyDoseService.getAll({ status: "published" });
        setDevotions(response.items);
      } catch (err) {
        setError(err.message || "Unable to load devotions.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const featured = useMemo(() => devotions[0], [devotions]);

  if (loading) return <LoadingSpinner label="Loading daily devotions" />;
  if (error) return <ErrorState title="Unable to load devotions" message={error} />;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-n-8 px-5 py-24 text-n-1 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-color-1/10 via-white/5 to-transparent p-8 shadow-2xl shadow-black/20 lg:p-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-color-1">TSAGO Daily Dose</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">Feed your soul a verse @ a time.</h1>
            <p className="text-lg leading-8 text-n-3">A daily devotional rooted in faith, hope, and purpose, designed to help you walk with God one day at a time.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admin/login" className="rounded-full border border-color-1/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-color-1 transition hover:bg-color-1/10">
                Admin access
              </Link>
            </div>
          </div>
        </section>

        {featured ? (
          <section className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-color-1">Featured devotion</p>
                <h2 className="mt-3 text-3xl font-semibold text-n-1">{featured.title}</h2>
              </div>
              <div className="rounded-full border border-color-1/30 bg-color-1/10 px-4 py-2 text-sm text-color-1">{featured.date}</div>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-8 text-n-3">{featured.devotionalMessage?.slice(0, 220)}{featured.devotionalMessage?.length > 220 ? "..." : ""}</p>
            <Link to={`/daily-dose/${featured.slug}`} className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.3em] text-color-1">
              Read this devotion →
            </Link>
          </section>
        ) : null}

        <DailyDoseList devotions={devotions} />
        </div>
      </div>
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default DailyDosePage;
