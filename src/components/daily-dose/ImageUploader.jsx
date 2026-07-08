const ImageUploader = ({ value, onChange, label = "Featured Image" }) => {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.3em] text-n-3">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1"
      />
      <input
        type="url"
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-n-8/70 px-4 py-3 text-base text-n-1 outline-none transition focus:border-color-1"
        placeholder="Or paste an image URL"
      />
      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-n-4">Upload a file or paste an image URL.</p>
    </div>
  );
};

export default ImageUploader;
