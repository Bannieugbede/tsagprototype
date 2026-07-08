const FeaturedImage = ({ image, alt }) => {
  if (!image) return null;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
      <img src={image} alt={alt} className="h-72 w-full object-cover" />
    </div>
  );
};

export default FeaturedImage;
