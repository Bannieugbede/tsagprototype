const RichTextEditor = ({ value, onChange, label = "Message", maxLength = 1800 }) => (
  <div>
    <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">{label}</label>
    <textarea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={10}
      maxLength={maxLength}
      className="min-h-[14rem] w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none ring-0 transition focus:border-color-1"
      placeholder="Write a devotional reflection..."
    />
    <div className="mt-2 text-right text-xs uppercase tracking-[0.25em] text-n-4">{value?.length || 0}/{maxLength}</div>
  </div>
);

export default RichTextEditor;
