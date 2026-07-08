import { useEffect, useState } from "react";

const ShareButton = ({ title, text, url, label = "Share" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const share = async (platform = "native") => {
    if (!shareUrl) return;

    const shareText = `${title}\n${text}`;

    if (platform === "native" && typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url: shareUrl });
        return;
      } catch (error) {
        console.warn("Share canceled", error);
      }
    }

    if (platform === "copy") {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
      }
      setIsOpen(false);
      return;
    }

    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);

    const shareLinks = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    };

    const targetUrl = shareLinks[platform];
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-full border border-color-1/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-color-1 transition hover:bg-color-1/10"
      >
        {copied ? "Copied!" : label}
      </button>

      {isOpen ? (
        <div className="absolute right-0 z-20 mt-3 w-48 rounded-2xl border border-white/10 bg-n-8 p-3 shadow-2xl shadow-black/30">
          <button type="button" onClick={() => share("native")} className="mb-2 block w-full rounded-xl px-3 py-2 text-left text-sm text-n-1 transition hover:bg-white/10">
            Share sheet
          </button>
          <button type="button" onClick={() => share("copy")} className="mb-2 block w-full rounded-xl px-3 py-2 text-left text-sm text-n-1 transition hover:bg-white/10">
            Copy link
          </button>
          <button type="button" onClick={() => share("whatsapp")} className="mb-2 block w-full rounded-xl px-3 py-2 text-left text-sm text-n-1 transition hover:bg-white/10">
            WhatsApp
          </button>
          <button type="button" onClick={() => share("facebook")} className="mb-2 block w-full rounded-xl px-3 py-2 text-left text-sm text-n-1 transition hover:bg-white/10">
            Facebook
          </button>
          <button type="button" onClick={() => share("x")} className="mb-2 block w-full rounded-xl px-3 py-2 text-left text-sm text-n-1 transition hover:bg-white/10">
            X / Twitter
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ShareButton;
