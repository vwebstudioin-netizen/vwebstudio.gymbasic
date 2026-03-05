export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60 text-sm uppercase tracking-wider">Loading...</p>
      </div>
    </div>
  );
}
