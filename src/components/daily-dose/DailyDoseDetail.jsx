import AuthorCard from "./AuthorCard";
import FeaturedImage from "./FeaturedImage";
import PrayerSection from "./PrayerSection";
import ScriptureCard from "./ScriptureCard";
import ShareButton from "./ShareButton";

const DailyDoseDetail = ({ devotion }) => {
  if (!devotion) return null;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-color-1">TSAGO Daily Dose</p>
            <h1 className="mt-3 text-3xl font-semibold text-n-1 sm:text-4xl">{devotion.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-color-1/30 bg-color-1/10 px-4 py-2 text-sm text-color-1">
              {devotion.date}
            </div>
            <ShareButton
              title={devotion.title}
              text={devotion.keyTakeaway || devotion.devotionalMessage}
              url={typeof window !== "undefined" ? `${window.location.origin}/daily-dose/${devotion.slug}` : ""}
              label="Share devotion"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <FeaturedImage image={devotion.featuredImage} alt={devotion.title} />
            <div className="rounded-3xl border border-white/10 bg-n-8/60 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-color-1">Devotional Message</h2>
              <p className="mt-4 whitespace-pre-line text-base leading-8 text-n-3">{devotion.devotionalMessage}</p>
            </div>
          </div>

          <div className="space-y-6">
            <ScriptureCard verse={devotion.bibleVerse} reference={devotion.scriptureReference} />
            <PrayerSection prayer={devotion.prayer} />
            {devotion.keyTakeaway ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-color-1">Key Takeaway</h3>
                <p className="mt-4 text-base leading-8 text-n-3">{devotion.keyTakeaway}</p>
              </div>
            ) : null}
            <AuthorCard author={devotion.author} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDoseDetail;
