const EmptyState = ({ title, message }) => (
  <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center text-n-3">
    <h3 className="mb-3 text-xl font-semibold text-n-1">{title}</h3>
    <p className="text-sm leading-7">{message}</p>
  </div>
);

export default EmptyState;
