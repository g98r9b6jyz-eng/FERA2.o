import React, { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight, Loader2 } from 'lucide-react';

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
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="mb-6 flex justify-center">
          <div className="bg-blue-100 p-4 rounded-full relative">
            <ExternalLink className="w-8 h-8 text-blue-600" />
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
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-center text-sm text-slate-400">
            <Loader2 className="w-3 h-3 animate-spin mr-2" />
            <span>Redirecting to the new calculator...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
