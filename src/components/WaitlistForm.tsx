"use client";

import { useState } from "react";

export default function WaitlistForm({
  module,
  accent = "green",
}: {
  module: string;
  accent?: "green" | "violet";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || status === "done") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, module }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className="text-sm font-medium text-green">
        ✓ You&apos;re on the list — we&apos;ll email you when it&apos;s ready.
      </p>
    );
  }

  const btnClass = accent === "green" ? "site-cta-primary" : "site-cta-secondary";

  return (
    <form onSubmit={submit} className="flex flex-wrap items-center gap-3">
      <input
        type="email"
        required
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-56 rounded-full border border-border-strong bg-bg-raised px-4 py-2.5 text-sm text-text placeholder:text-text-tertiary focus:border-text-tertiary focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`min-h-10 px-5 text-sm disabled:opacity-60 ${btnClass}`}
      >
        {status === "loading" ? "Joining…" : "Notify me"}
      </button>
      {status === "error" && (
      <p className="w-full text-xs text-red" role="alert" aria-live="polite">
          Something went wrong — try again in a moment.
        </p>
      )}
    </form>
  );
}
