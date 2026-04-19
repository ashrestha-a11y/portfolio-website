"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">AS</span>
          <span>Abhishek Shrestha</span>
        </Link>

        <div className="nav-actions desktop-only">
          <ThemeToggle />
          <a className="resume-link" href="/Resume_Abhishek_Shrestha.docx" download>
            Download Resume
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle mobile-only"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          ☰
        </button>

        <div className={`nav-panel ${isOpen ? "open" : ""}`}>
          <div className="nav-links">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="nav-actions mobile-stack">
            <ThemeToggle />
            <a className="resume-link" href="/Resume_Abhishek_Shrestha.docx" download>
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
