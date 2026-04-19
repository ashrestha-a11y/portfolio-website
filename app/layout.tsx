import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "./components/AnimationProvider";
export const metadata: Metadata = {
  title: "Abhishek Shrestha | Software Engineer",
  description: "Software engineering portfolio website for Abhishek Shrestha",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return <html lang="en" suppressHydrationWarning><body><AnimationProvider />{children}</body></html>;
}
