"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation, ORDER_URL } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const handleOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [open]);

  return (
    <header className="site-header" ref={root}>
      <div className="page-width flex h-full items-center justify-between">
        <a href="#home" className="brand-link" aria-label="Kaju home" onClick={() => setOpen(false)}>
          <Image src="/images/kaju-logo.png" alt="काजु" width={878} height={552} className="brand-logo" priority />
        </a>
        <div className="flex items-center gap-5 md:gap-6">
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-yellow header-order hidden md:inline-flex">
            Order on WhatsApp
          </a>
          <button
            type="button"
            ref={toggle}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen(!open)}
            className={`menu-toggle ${open ? "is-open" : ""}`}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav id="site-navigation" aria-label="Main navigation" className="navigation-panel" hidden={!open}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}
