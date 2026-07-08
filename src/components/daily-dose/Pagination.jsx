const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-n-3 transition hover:border-color-1 hover:text-color-1 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>
      <span className="rounded-full border border-color-1/30 bg-color-1/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-color-1">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-n-3 transition hover:border-color-1 hover:text-color-1 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
