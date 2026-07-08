import { Link } from "react-router-dom";

const DevotionTable = ({ devotions, onEdit, onDelete, onDuplicate, onSort }) => (
  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl shadow-black/10">
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
      <h3 className="text-lg font-semibold text-n-1">All Devotions</h3>
      <button type="button" onClick={onSort} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-n-3 transition hover:border-color-1 hover:text-color-1">
        Sort by date
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-white/10 text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-n-3">
          <tr>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {devotions.map((devotion) => (
            <tr key={devotion.id} className="text-n-3">
              <td className="px-6 py-4 font-semibold text-n-1">{devotion.title}</td>
              <td className="px-6 py-4">{devotion.date}</td>
              <td className="px-6 py-4">{devotion.status}</td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  <Link to={`/admin/daily-dose/edit/${devotion.id}`} className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.25em] text-n-3 transition hover:border-color-1 hover:text-color-1">
                    Edit
                  </Link>
                  <button type="button" onClick={() => onDuplicate(devotion.id)} className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.25em] text-n-3 transition hover:border-color-1 hover:text-color-1">
                    Duplicate
                  </button>
                  <button type="button" onClick={() => onDelete(devotion.id)} className="rounded-full border border-rose-400/30 px-3 py-2 text-xs uppercase tracking-[0.25em] text-rose-300 transition hover:bg-rose-400/10">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DevotionTable;
