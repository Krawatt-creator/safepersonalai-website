"use client";

import { useEffect } from "react";

// Starts the download a moment after the page has opened. The file is sent
// as an attachment, so the visitor stays on this page with the steps.
export default function DownloadStarter({ url }: { url: string }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = url;
    }, 700);
    return () => window.clearTimeout(timer);
  }, [url]);
  return null;
}
