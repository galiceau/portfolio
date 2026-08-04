"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localePath, pathWithoutLocale } from "@/lib/i18n/routing";

const SECTIONS = ["expertise", "experience", "skills", "projects", "blog", "contact"] as const;

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const basePath = pathWithoutLocale(pathname ?? "/");
  const home = localePath(locale, "/");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (basePath !== "/") {
      setActiveSection(null);
      return;
    }

    const targets = SECTIONS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-80px 0px -45% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [basePath]);

  const navLinks = SECTIONS.map((id) => ({
    id,
    label: dict.nav[id],
    href: `${home === "/" ? "" : home}/#${id}`.replace("//#", "/#"),
  }));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-border-subtle bg-bg-veil backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={home}
          className="font-display text-lg font-bold tracking-tight text-fg transition hover:text-accent"
        >
          {profile.brand}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label={dict.nav.home} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={activeSection === link.id ? "true" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    activeSection === link.id
                      ? "bg-accent-soft text-accent-strong"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={localePath(locale, "/cv")}
                aria-current={basePath === "/cv" ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  basePath === "/cv"
                    ? "bg-accent-soft text-accent-strong"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {dict.nav.cv}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher current={locale} label={dict.locale.switch} />
          <ThemeToggle labels={dict.theme} />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-btn border border-border-subtle glass text-fg-muted transition hover:border-border-strong hover:text-accent lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={dict.nav.home}
          className="border-t border-border-subtle bg-bg-veil backdrop-blur-xl lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-border-subtle py-3 text-base font-medium text-fg-muted transition hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={localePath(locale, "/cv")}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-fg-muted transition hover:text-accent"
              >
                {dict.nav.cv}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
