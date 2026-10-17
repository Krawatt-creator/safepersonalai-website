"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Starts the download a moment after the page has opened. The file is sent
// as an attachment, so the visitor stays on this page with the steps.
export default function DownloadStarter({ url }: { url: string }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      // Counted only when the visitor allowed Analytics (country and city come from Google's own estimate).
      trackEvent("file_download", { file_name: url.split("/").pop() || "SafePersonalAI" });
      window.location.href = url;
    }, 700);
    return () => window.clearTimeout(timer);
  }, [url]);
  return null;
}
