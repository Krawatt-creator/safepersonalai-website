"use client";

import { useState } from "react";
import PreviewChrome from "./PreviewChrome";

// This is intentionally a local interaction demo. It never writes to the
// packaged app or suggests that a website click changes a customer's Mac.
export default function SettingsPreviewPanel() {
  const [provider, setProvider] = useState("Anthropic");
  const [autoApprove, setAutoApprove] = useState(false);
  return <div className="grain relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
    <PreviewChrome title="Settings" />
    <div className="space-y-3 p-5">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-raised px-3.5 py-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-green text-xs font-bold text-white">SP</span><div className="min-w-0 flex-1"><p className="text-xs font-semibold text-text">Your profile</p><p className="text-[11px] text-text-tertiary">Cosmetic, stored on this browser</p></div><span className="text-[10px] text-text-tertiary">Edit</span></div>
      <div className="rounded-xl border border-border bg-bg-raised px-3.5 py-3"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-text">AI provider</p><span className="text-[10px] text-green">{provider} selected</span></div><div className="mt-2 flex flex-wrap gap-1.5">{["Ollama (local)", "Anthropic", "OpenAI", "Gemini"].map((name) => <button key={name} type="button" onClick={() => setProvider(name)} aria-pressed={provider === name} className={`rounded-full border px-2.5 py-1 text-[10px] transition ${provider === name ? "border-green bg-green/12 font-semibold text-green" : "border-border text-text-tertiary hover:border-border-strong hover:text-text"}`}>{name}</button>)}</div></div>
      <div className="rounded-xl border border-border bg-bg-raised px-3.5 py-3"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold text-text">Auto-Approve</p><p className="mt-1 text-[10px] text-text-tertiary">Demo control · real app always asks first by default</p></div><button type="button" role="switch" aria-checked={autoApprove} onClick={() => setAutoApprove((value) => !value)} className={`relative h-6 w-10 rounded-full transition ${autoApprove ? "bg-green" : "bg-bg-card"}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${autoApprove ? "left-5" : "left-1"}`} /></button></div></div>
      <div className="rounded-xl border border-border bg-bg-raised px-3.5 py-3"><div className="flex items-center justify-between text-xs"><p className="font-semibold text-text">Connected Accounts</p><span className="text-[10px] text-text-tertiary">Gmail · Outlook</span></div><div className="mt-2 flex items-center justify-between text-[11px]"><span className="text-text-secondary">Output language</span><span className="font-medium text-green">English</span></div><div className="mt-1 flex items-center justify-between text-[11px]"><span className="text-text-secondary">Calendars</span><span className="font-medium text-green">Google · Apple</span></div></div>
    </div>
    <div className="border-t border-border px-5 py-4"><p className="text-[11px] text-text-tertiary">Illustrative website interaction — real settings stay on your Mac.</p></div>
  </div>;
}
