"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import resumeData from "@/data/resume";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Handle active section highlighting for home page
      if (pathname === "/") {
        const sections = ["home", "resume", "projects", "contact"];
        const scrollY = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollY) {
            setActive(sections[i]);
            break;
          }
        }
      } else {
        // Set active based on current pathname
        const current = navItems.find(item => item.href === pathname);
        if (current) {
          setActive(current.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-accent transition-colors">
            {resumeData.name.split(" ")[0]}
          </Link>
          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => {
              const isActive = active === item.id;
              const href = pathname === "/" && item.id !== "home" 
                ? `#${item.id}` 
                : item.href;
              
              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`px-2 py-1 text-sm sm:text-base transition-colors ${
                    isActive
                      ? "text-accent font-medium border-b-2 border-accent"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
