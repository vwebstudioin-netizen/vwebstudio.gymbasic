import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark px-4">
      <div className="text-center">
        <h1 className="font-display text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-display text-2xl md:text-3xl text-white font-bold uppercase mb-4">
          Page Not Found
        </h2>
        <p className="text-white/50 max-w-md mx-auto mb-8">
          Looks like this page skipped leg day. Let&apos;s get you back to the workout floor.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
