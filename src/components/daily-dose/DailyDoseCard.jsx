import { Link } from "react-router-dom";
import ShareButton from "./ShareButton";

const DailyDoseCard = ({ devotion }) => (
  <article className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-color-1/40">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-color-1">Daily Dose</p>
        <h3 className="mt-3 text-xl font-semibold text-n-1">{devotion.title}</h3>
      </div>
      <span className="rounded-full border border-color-1/30 bg-color-1/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-color-1">
        {devotion.status}
      </span>
    </div>

    <p className="mt-4 text-sm leading-7 text-n-3">{devotion.devotionalMessage?.slice(0, 140)}{devotion.devotionalMessage?.length > 140 ? "..." : ""}</p>

    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-n-3">
      <span>{devotion.date}</span>
      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      <span>{devotion.author}</span>
    </div>

    <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
      <Link to={`/daily-dose/${devotion.slug}`} className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-color-1">
        Read devotion
      </Link>
      <ShareButton
        title={devotion.title}
        text={devotion.keyTakeaway || devotion.devotionalMessage}
        url={`${window.location.origin}/daily-dose/${devotion.slug}`}
        label="Share"
      />
    </div>
  </article>
);

export default DailyDoseCard;
