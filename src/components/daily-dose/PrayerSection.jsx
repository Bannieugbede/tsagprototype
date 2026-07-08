const PrayerSection = ({ prayer }) => (
  <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-color-1">Prayer</h3>
    <p className="mt-4 text-base leading-8 text-n-3">{prayer}</p>
  </section>
);

export default PrayerSection;
