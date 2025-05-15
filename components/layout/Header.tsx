export default function Header() {
  return (
    <header className="w-full py-4 border-b border-neutral-platinum_gray bg-brand_white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-display text-royal-gold">RoyalCalc</div>
        <a href="https://royal.space" target="_blank" rel="noopener" className="text-sm text-royal-black hover:text-royal-gold">Royal.Space</a>
      </div>
    </header>
  );
} 