import { NavLink } from "react-router-dom";

const links = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/daily-dose", label: "Devotions" },
  { to: "/admin/daily-dose/new", label: "New Devotion" },
];

const AdminSidebar = () => (
  <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.35em] text-color-1">Admin</p>
      <h2 className="mt-2 text-2xl font-semibold text-n-1">TSAGO Daily Dose</h2>
    </div>
    <nav className="space-y-3">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition ${
              isActive ? "bg-color-1 text-n-8" : "text-n-3 hover:bg-white/10 hover:text-n-1"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default AdminSidebar;
