import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../../components/admin/AdminDashboard";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import SearchBar from "../../components/admin/SearchBar";
import DevotionTable from "../../components/admin/DevotionTable";
import ConfirmationModal from "../../components/admin/ConfirmationModal";
import LoadingSpinner from "../../components/daily-dose/LoadingSpinner";
import ErrorState from "../../components/daily-dose/ErrorState";
import { dailyDoseService } from "../../services/dailyDoseService";
import { useSEO } from "../../hooks/useSEO";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [devotions, setDevotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [sortOrder, setSortOrder] = useState("date");

  useSEO({ title: "Admin Dashboard", description: "Manage TSAGO daily devotions from the admin dashboard." });

  useEffect(() => {
    const auth = dailyDoseService.getAuthState();
    if (!auth?.isAuthenticated) {
      navigate("/admin/login", { replace: true });
      return;
    }

    const load = async () => {
      try {
        setLoading(true);
        const response = dailyDoseService.getAll({ status: "all", search, sort: sortOrder, page: 1, pageSize: 100 });
        setDevotions(response.items);
      } catch (err) {
        setError(err.message || "Unable to load the dashboard.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [navigate, search, sortOrder]);

  const stats = useMemo(() => dailyDoseService.getStats(), [devotions]);

  const handleDelete = (id) => {
    setDeleteTarget(id);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    dailyDoseService.remove(deleteTarget);
    setDevotions((current) => current.filter((item) => item.id !== deleteTarget));
    setDeleteTarget(null);
  };

  const handleDuplicate = (id) => {
    const duplicated = dailyDoseService.duplicate(id);
    if (duplicated) {
      setDevotions((current) => [duplicated, ...current]);
    }
  };

  return (
    <div className="min-h-screen bg-n-8 px-5 py-24 text-n-1 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <AdminSidebar />
        <div className="space-y-6">
          <AdminHeader title="Dashboard" subtitle="Monitor your daily devotion collection and keep content fresh." />
          {loading ? <LoadingSpinner label="Loading dashboard" /> : error ? <ErrorState title="Dashboard unavailable" message={error} /> : (
            <>
              <AdminDashboard stats={stats} />
              <div className="flex flex-wrap items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
                <SearchBar value={search} onChange={setSearch} />
                <a href="/admin/daily-dose/new" className="rounded-full bg-color-1 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-n-8 transition hover:opacity-90">
                  New devotion
                </a>
              </div>
              <DevotionTable devotions={devotions} onEdit={() => {}} onDelete={handleDelete} onDuplicate={handleDuplicate} onSort={() => setSortOrder((current) => (current === "date" ? "title" : "date"))} />
            </>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={Boolean(deleteTarget)}
        title="Delete devotion"
        message="This will remove the devotion from storage. This action cannot be undone."
        onCancel={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default AdminDashboardPage;
