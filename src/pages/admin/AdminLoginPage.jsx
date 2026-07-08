import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dailyDoseService } from "../../services/dailyDoseService";
import { useSEO } from "../../hooks/useSEO";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useSEO({ title: "Admin Login", description: "Temporary admin login placeholder for TSAGO Daily Dose." });

  useEffect(() => {
    const auth = dailyDoseService.getAuthState();
    if (auth?.isAuthenticated) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const valid = form.username.trim() === "tsago" && form.password === "daily-dose";
    if (!valid) {
      setError("Use username tsago and password daily-dose for this placeholder login.");
      return;
    }

    // NOTE: This is a frontend-only placeholder and is NOT secure.
    dailyDoseService.setAuthState({ isAuthenticated: true, username: form.username });
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-n-8 px-5 py-24 text-n-1 lg:px-10">
      <div className="mx-auto flex max-w-md flex-col rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.35em] text-color-1">Admin access</p>
        <h1 className="mt-3 text-3xl font-semibold">TSAGO Daily Dose</h1>
        <p className="mt-3 text-sm leading-7 text-n-3">This login is intentionally simple and stored in browser storage only.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Username</label>
            <input value={form.username} onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Password</label>
            <input type="password" value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" />
          </div>
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <button type="submit" className="w-full rounded-full bg-color-1 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-n-8 transition hover:opacity-90">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
