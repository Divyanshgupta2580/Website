"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error internally without exposing stack traces to clients
    console.error("[CRITICAL APP BOUNDARY ERROR]:", error.message);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 bg-[#F4F2EE] px-4">
      <div className="max-w-md w-full text-center bg-white border border-[#D5D4D0] p-8 sm:p-12 shadow-sm">
        <div className="w-14 h-14 mx-auto mb-6 bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-2">
          Temporary Error
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#18324A] mb-3">
          Something went wrong
        </h1>

        <p className="text-sm text-[#66717A] leading-relaxed mb-8">
          A temporary issue occurred while loading this page. Please try refreshing or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="sm"
            className="w-full sm:w-auto"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-2" />
            <span>Try Again</span>
          </Button>
          <Button href="/" variant="outline" size="sm" className="w-full sm:w-auto">
            <span>Return to Homepage</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
