import React, { useEffect, useState } from "react";

export default function WhatsAppButton({
  phone = "27601234567",
  message = "Hi, I'd like to enquire about the matric rewrite programme.",
}) {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("wa_tip_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setShowTip(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encoded}`;

  const handleDismiss = () => {
    setShowTip(false);
    localStorage.setItem("wa_tip_dismissed", "true");
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 flex items-end gap-3 md:bottom-6 md:right-6">
      {/* Popup tip */}
      {showTip && (
        <div className="relative max-w-[220px] rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.14)] animate-[fadeIn_.25s_ease-out]">
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss WhatsApp message"
            className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            ×
          </button>

          <p className="pr-5 font-poppins text-xs leading-5 text-slate-600">
            Need help? Message us on WhatsApp for quick support.
          </p>

          {/* little arrow */}
          <div className="absolute -right-1.5 bottom-4 h-3 w-3 rotate-45 border-r border-b border-slate-200 bg-white" />
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative inline-flex"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_24px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_16px_30px_rgba(37,211,102,0.42)]">
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="relative h-7 w-7 fill-white"
            aria-hidden="true"
          >
            <path d="M19.11 17.21c-.27-.13-1.58-.78-1.83-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.3-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.57 1.09 2.75.13.18 1.87 2.85 4.53 3.99.63.27 1.13.43 1.52.56.64.2 1.22.17 1.67.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.24-.18-.51-.31Z" />
            <path d="M16.03 3.2C9 3.2 3.3 8.87 3.3 15.87c0 2.23.58 4.4 1.68 6.31L3.2 28.8l6.8-1.73a12.8 12.8 0 0 0 6.03 1.53h.01c7.02 0 12.7-5.68 12.7-12.69 0-3.4-1.33-6.59-3.73-8.99A12.63 12.63 0 0 0 16.03 3.2Zm0 23.25h-.01a10.66 10.66 0 0 1-5.43-1.49l-.39-.23-4.03 1.02 1.08-3.93-.25-.4a10.58 10.58 0 0 1-1.63-5.56c0-5.89 4.79-10.68 10.69-10.68 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.13 7.54c0 5.89-4.8 10.68-10.69 10.68Z" />
          </svg>
        </div>
      </a>
    </div>
  );
}