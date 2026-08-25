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

  const btnClass =
    accent === "green"
      ? "bg-green text-[#06110c] hover:brightness-110"
      : "border border-border-strong text-text hover:border-text-tertiary";

  return (
    <form onSubmit={submit} className="flex flex-wrap items-center gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-56 rounded-full border border-border-strong bg-bg-raised px-4 py-2.5 text-sm text-text placeholder:text-text-tertiary focus:border-text-tertiary focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`rounded-full px-5 py-2.5 text-sm font-medium transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 ${btnClass}`}
      >
        {status === "loading" ? "Joining…" : "Notify me"}
      </button>
      {status === "error" && (
        <p className="w-full text-xs text-red">
          Something went wrong — try again in a moment.
        </p>
      )}
    </form>
  );
}
