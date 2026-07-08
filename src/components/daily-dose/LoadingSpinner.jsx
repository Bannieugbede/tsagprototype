const LoadingSpinner = ({ label = "Loading..." }) => (
  <div className="flex min-h-[14rem] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-n-3">
    <div className="mb-3 h-10 w-10 animate-spin rounded-full border-2 border-color-1 border-t-transparent" />
    <p className="text-sm uppercase tracking-[0.3em]">{label}</p>
  </div>
);

export default LoadingSpinner;
