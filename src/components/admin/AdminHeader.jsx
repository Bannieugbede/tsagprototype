import { Link } from "react-router-dom";

const AdminHeader = ({ title, subtitle }) => (
  <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
    <div>
      <p className="text-sm uppercase tracking-[0.35em] text-color-1">Admin Panel</p>
      <h1 className="mt-2 text-2xl font-semibold text-n-1">{title}</h1>
      <p className="mt-2 text-sm text-n-3">{subtitle}</p>
    </div>
    <Link to="/daily-dose" className="rounded-full border border-color-1/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-color-1 transition hover:bg-color-1/10">
      View public page
    </Link>
  </div>
);

export default AdminHeader;
