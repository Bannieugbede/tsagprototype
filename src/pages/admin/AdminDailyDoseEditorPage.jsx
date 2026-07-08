import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import DailyDoseEditor from "../../components/daily-dose/DailyDoseEditor";
import DailyDosePreview from "../../components/daily-dose/DailyDosePreview";
import LoadingSpinner from "../../components/daily-dose/LoadingSpinner";
import ErrorState from "../../components/daily-dose/ErrorState";
import { dailyDoseService } from "../../services/dailyDoseService";
import { useSEO } from "../../hooks/useSEO";

const AdminDailyDoseEditorPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [devotion, setDevotion] = useState(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);

  useSEO({ title: id ? "Edit Devotion" : "Create Devotion", description: "Create or edit a TSAGO daily devotion." });

  useEffect(() => {
    const auth = dailyDoseService.getAuthState();
    if (!auth?.isAuthenticated) {
      navigate("/admin/login", { replace: true });
      return;
    }

    if (!id) {
      setLoading(false);
      return;
    }

    const load = async () => {
      try {
        setLoading(true);
        const current = dailyDoseService.getById(id);
        if (!current) {
          setError("This devotion could not be found.");
          return;
        }
        setDevotion(current);
      } catch (err) {
        setError(err.message || "Unable to load the devotion.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, navigate]);

  const initialValues = useMemo(() => devotion || {
    title: "",
    date: new Date().toISOString().slice(0, 10),
    bibleVerse: "",
    scriptureReference: "",
    devotionalMessage: "",
    prayer: "",
    keyTakeaway: "",
    author: "",
    featuredImage: "",
    status: "draft",
  }, [devotion]);

  const handleSubmit = (payload) => {
    if (id) {
      dailyDoseService.update(id, payload);
    } else {
      dailyDoseService.create(payload);
    }

    navigate("/admin/daily-dose");
  };

  const handlePreview = (payload) => {
    setPreview(payload);
  };

  return (
    <div className="min-h-screen bg-n-8 px-5 py-24 text-n-1 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <AdminSidebar />
        <div className="space-y-6">
          <AdminHeader title={id ? "Edit Devotion" : "Create Daily Dose"} subtitle="Craft a devotional with scripture, prayer, and a polished public preview." />
          {loading ? <LoadingSpinner label="Loading editor" /> : error ? <ErrorState title="Editor unavailable" message={error} /> : preview ? <DailyDosePreview devotion={preview} onBack={() => setPreview(null)} /> : <DailyDoseEditor initialValues={initialValues} onSubmit={handleSubmit} onPreview={handlePreview} />}
        </div>
      </div>
    </div>
  );
};

export default AdminDailyDoseEditorPage;
