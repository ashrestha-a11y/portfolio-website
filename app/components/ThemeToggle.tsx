"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const systemPrefersLight = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const nextTheme = stored || (systemPrefersLight ? "light" : "dark");
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);
  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }
  const checked = theme === "light";
  return (
    <button type="button" className="theme-toggle switch-toggle" onClick={toggleTheme} aria-label={`Switch to ${checked ? "dark" : "light"} mode`} aria-pressed={checked} title={`Switch to ${checked ? "dark" : "light"} mode`}>
      <span className="toggle-icon">🌙</span>
      <span className={`toggle-track ${checked ? "is-light" : ""}`} aria-hidden="true"><span className="toggle-thumb" /></span>
      <span className="toggle-icon">☀️</span>
    </button>
  );
}
