export const OfferTicker = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white border-b border-white/10">
      <div className="relative flex whitespace-nowrap">
        
        <div className="ticker-track flex items-center gap-12 py-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-sm font-medium tracking-wide flex items-center gap-4"
            >
              <span className="opacity-90">
                New Year Resolution Offer — 40% OFF on registration fees
              </span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};
