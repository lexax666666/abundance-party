export default function GoldenDivider() {
  return (
    <div className="relative z-10 flex items-center justify-center py-12">
      <div className="h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent" />
      <div className="absolute h-2 w-2 rotate-45 bg-gold-primary" />
    </div>
  );
}
