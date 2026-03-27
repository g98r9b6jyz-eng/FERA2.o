import { useEffect, useState } from 'react';

// Self-contained SVG Icons to avoid "module not found" errors
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const LoaderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

export default function App() {
  const newUrl = "https://feracalc.pages.dev/";
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Automatic redirect logic
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = newUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [newUrl]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="mb-6 flex justify-center">
          <div className="bg-blue-100 p-4 rounded-full relative">
            <div className="text-blue-600">
              <ExternalLinkIcon />
            </div>
            <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin opacity-20"></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          F.E.R.A. has moved
        </h1>
        
        <p className="text-slate-600 mb-6">
          We've updated our home. You are being redirected automatically in <strong>{countdown}</strong> seconds...
        </p>

        <a 
          href={newUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 group shadow-lg shadow-blue-200"
        >
          Go to feracalc.pages.dev
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            <ArrowRightIcon />
          </span>
        </a>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-center text-sm text-slate-400">
            <div className="mr-2">
              <LoaderIcon />
            </div>
            <span>Redirecting to the new calculator...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
