const DailyDosePreview = ({ devotion, onBack }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-2xl font-semibold text-n-1">Preview</h2>
      <button
        type="button"
        onClick={onBack}
        className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-n-3 transition hover:border-color-1 hover:text-color-1"
      >
        Back to editor
      </button>
    </div>

    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10">
      <p className="text-sm uppercase tracking-[0.35em] text-color-1">Preview</p>
      <h1 className="mt-4 text-3xl font-semibold text-n-1">{devotion.title || "Untitled devotion"}</h1>
      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-n-3">{devotion.date}</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {devotion.featuredImage ? <img src={devotion.featuredImage} alt={devotion.title} className="h-72 w-full rounded-[1.5rem] object-cover" /> : null}
          <div className="rounded-3xl border border-white/10 bg-n-8/70 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-color-1">Devotional Message</h2>
            <p className="mt-4 whitespace-pre-line text-base leading-8 text-n-3">{devotion.devotionalMessage || "Your devotional message will appear here."}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-color-1/30 bg-gradient-to-br from-color-1/10 to-transparent p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-color-1">Scripture</p>
            <blockquote className="mt-4 text-xl leading-8 text-n-1">“{devotion.bibleVerse || "Your scripture will appear here."}”</blockquote>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-n-3">{devotion.scriptureReference}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-color-1">Prayer</h3>
            <p className="mt-4 text-base leading-8 text-n-3">{devotion.prayer || "Your prayer will appear here."}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DailyDosePreview;
