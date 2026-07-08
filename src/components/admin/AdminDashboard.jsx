const AdminDashboard = ({ stats }) => (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-n-3">Total Daily Devotions</p>
      <p className="mt-4 text-4xl font-semibold text-n-1">{stats.total}</p>
    </div>
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-n-3">Latest Post</p>
      <p className="mt-4 text-xl font-semibold text-n-1">{stats.latest?.title || "No published post"}</p>
    </div>
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-n-3">Draft Count</p>
      <p className="mt-4 text-4xl font-semibold text-n-1">{stats.draftCount}</p>
    </div>
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-n-3">Last Updated</p>
      <p className="mt-4 text-xl font-semibold text-n-1">{stats.lastUpdated ? new Date(stats.lastUpdated).toLocaleDateString() : "—"}</p>
    </div>
  </div>
);

export default AdminDashboard;
