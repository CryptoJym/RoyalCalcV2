export default function Footer() {
  return (
    <footer className="w-full py-4 border-t border-neutral-platinum_gray bg-brand_white">
      <div className="container mx-auto px-4 text-center text-xs text-neutral-platinum_gray">
        © {new Date().getFullYear()} Royal.Space. All rights reserved.
      </div>
    </footer>
  );
} 