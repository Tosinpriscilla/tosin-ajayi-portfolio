import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">
          Case Study Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          The case study you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
