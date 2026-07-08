import { useMemo, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import ImageUploader from "./ImageUploader";

const emptyForm = {
  title: "",
  date: new Date().toISOString().slice(0, 10),
  bibleVerse: "",
  scriptureReference: "",
  devotionalMessage: "",
  prayer: "",
  keyTakeaway: "",
  author: "",
  featuredImage: "",
  status: "draft",
};

const DailyDoseEditor = ({ initialValues, onSubmit, onPreview, submitLabel = "Publish", draftLabel = "Save Draft" }) => {
  const [form, setForm] = useState(initialValues || emptyForm);
  const [errors, setErrors] = useState({});

  const canSubmit = useMemo(() => {
    return form.title && form.date && form.bibleVerse && form.scriptureReference && form.devotionalMessage && form.prayer && form.author;
  }, [form]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.title.trim()) nextErrors.title = "Title is required";
    if (!form.date) nextErrors.date = "Date is required";
    if (!form.bibleVerse.trim()) nextErrors.bibleVerse = "Bible verse is required";
    if (!form.scriptureReference.trim()) nextErrors.scriptureReference = "Scripture reference is required";
    if (!form.devotionalMessage.trim()) nextErrors.devotionalMessage = "Devotional message is required";
    if (!form.prayer.trim()) nextErrors.prayer = "Prayer is required";
    if (!form.author.trim()) nextErrors.author = "Author is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (status) => {
    if (!validate()) return;
    onSubmit({ ...form, status });
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-color-1">Compose a devotion</p>
          <h2 className="mt-2 text-2xl font-semibold text-n-1">Daily Dose Editor</h2>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-n-3 transition hover:border-color-1 hover:text-color-1"
          >
            {draftLabel}
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("published")}
            className="rounded-full bg-color-1 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-n-8 transition hover:opacity-90"
            disabled={!canSubmit}
          >
            {submitLabel}
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Title</label>
            <input value={form.title} onChange={(event) => updateField("title", event.target.value)} maxLength={80} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" placeholder="Title" />
            {errors.title ? <p className="mt-2 text-sm text-rose-300">{errors.title}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Date</label>
            <input type="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" />
            {errors.date ? <p className="mt-2 text-sm text-rose-300">{errors.date}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Bible Verse</label>
            <textarea value={form.bibleVerse} onChange={(event) => updateField("bibleVerse", event.target.value)} rows={3} maxLength={220} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" placeholder="Enter the scripture verse..." />
            {errors.bibleVerse ? <p className="mt-2 text-sm text-rose-300">{errors.bibleVerse}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Scripture Reference</label>
            <input value={form.scriptureReference} onChange={(event) => updateField("scriptureReference", event.target.value)} maxLength={80} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" placeholder="e.g. Psalm 46:10" />
            {errors.scriptureReference ? <p className="mt-2 text-sm text-rose-300">{errors.scriptureReference}</p> : null}
          </div>
        </div>

        <div className="space-y-5">
          <RichTextEditor value={form.devotionalMessage} onChange={(value) => updateField("devotionalMessage", value)} />
          {errors.devotionalMessage ? <p className="mt-2 text-sm text-rose-300">{errors.devotionalMessage}</p> : null}

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Prayer</label>
            <textarea value={form.prayer} onChange={(event) => updateField("prayer", event.target.value)} rows={4} maxLength={500} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" placeholder="Write a prayer..." />
            {errors.prayer ? <p className="mt-2 text-sm text-rose-300">{errors.prayer}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Key Takeaway</label>
            <input value={form.keyTakeaway} onChange={(event) => updateField("keyTakeaway", event.target.value)} maxLength={180} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" placeholder="Optional" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">Author</label>
            <input value={form.author} onChange={(event) => updateField("author", event.target.value)} maxLength={80} className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1" placeholder="Author name" />
            {errors.author ? <p className="mt-2 text-sm text-rose-300">{errors.author}</p> : null}
          </div>

          <ImageUploader value={form.featuredImage} onChange={(value) => updateField("featuredImage", value)} />

          <button
            type="button"
            onClick={() => onPreview(form)}
            className="w-full rounded-full border border-color-1/40 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-color-1 transition hover:bg-color-1/10"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyDoseEditor;
