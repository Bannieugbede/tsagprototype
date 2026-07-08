const AuthorCard = ({ author }) => (
  <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-color-1/20 text-lg font-semibold text-color-1">
      {author?.charAt(0).toUpperCase() || "T"}
    </div>
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-n-3">Author</p>
      <p className="text-base font-semibold text-n-1">{author}</p>
    </div>
  </div>
);

export default AuthorCard;
