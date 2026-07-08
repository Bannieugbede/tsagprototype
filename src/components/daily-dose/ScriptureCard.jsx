const ScriptureCard = ({ verse, reference }) => (
  <div className="rounded-3xl border border-color-1/30 bg-gradient-to-br from-color-1/10 to-transparent p-6 shadow-lg shadow-black/10">
    <p className="text-xs uppercase tracking-[0.4em] text-color-1">Scripture</p>
    <blockquote className="mt-4 text-xl leading-8 text-n-1">“{verse}”</blockquote>
    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-n-3">{reference}</p>
  </div>
);

export default ScriptureCard;
