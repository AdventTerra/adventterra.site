export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img 
  src="./letter-logo-gold.png" 
  alt="Advent Terra Logo"
  width={48}
  height={48}
  className="transition-all duration-300"
/>
    </div>
  );
}
