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
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-[#0B0D0F] px-4">
      <div className="max-w-md w-full text-center bg-[#15191D] border border-[#2A3035] p-8 sm:p-12">
        <div className="w-14 h-14 mx-auto mb-6 bg-red-950/40 border border-red-800 flex items-center justify-center text-red-400">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 block mb-2">
          SYSTEM NOTICE // EXCEPTION
        </span>

        <h1 className="text-2xl sm:text-3xl font-light text-[#F3F1EC] mb-3">
          Temporary Runtime Interrupt
        </h1>

        <p className="text-xs sm:text-sm text-[#A7ADB3] leading-relaxed mb-8">
          A client rendering anomaly occurred while generating this engineering view. Internal telemetry has recorded the incident.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="sm"
            className="w-full sm:w-auto"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-2" />
            <span>Retry Connection</span>
          </Button>
          <Button href="/" variant="outline" size="sm" className="w-full sm:w-auto">
            <span>Back to Portal Home</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
