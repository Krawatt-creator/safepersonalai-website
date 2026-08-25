"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#modules", label: "Modules" },
  { href: "#boundary", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_10px_rgba(0,229,153,0.7)]" />
          <span className="font-semibold tracking-tight text-text">SafePersonalAI</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-text">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden rounded-full bg-text px-4 py-2 text-sm font-medium text-bg transition hover:bg-green sm:inline-block"
          >
            Get started free
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="h-4 w-4"
            >
              {open ? (
                <path d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1 text-sm text-text-secondary">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 transition hover:bg-bg-raised hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-text px-4 py-2.5 text-center text-sm font-medium text-bg transition hover:bg-green"
              >
                Get started free
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
