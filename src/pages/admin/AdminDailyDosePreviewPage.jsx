import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dailyDoseService } from "../../services/dailyDoseService";
import DailyDoseDetail from "../../components/daily-dose/DailyDoseDetail";
import LoadingSpinner from "../../components/daily-dose/LoadingSpinner";
import ErrorState from "../../components/daily-dose/ErrorState";
import { useSEO } from "../../hooks/useSEO";

const AdminDailyDosePreviewPage = () => {
  const { id } = useParams();
  const [devotion, setDevotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useSEO({ title: "Preview Devotion", description: "Preview a TSAGO devotion before publishing." });

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const item = dailyDoseService.getById(id);
        if (!item) {
          setError("This devotion could not be found.");
          return;
        }
        setDevotion(item);
      } catch (err) {
        setError(err.message || "Unable to preview devotion.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <LoadingSpinner label="Preparing preview" />;
  if (error) return <ErrorState title="Preview unavailable" message={error} />;

  return (
    <div className="min-h-screen bg-n-8 px-5 py-24 text-n-1 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Link to="/admin/daily-dose" className="mb-6 inline-flex text-sm font-semibold uppercase tracking-[0.3em] text-color-1">
          ← Back to admin library
        </Link>
        <DailyDoseDetail devotion={devotion} />
      </div>
    </div>
  );
};

export default AdminDailyDosePreviewPage;
