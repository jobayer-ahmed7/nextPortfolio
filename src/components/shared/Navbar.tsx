"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  Home,
  CircleUser,
  Brain,
  BriefcaseBusiness,
  Briefcase,
  Send,
  Menu,
  Wrench,
  LucideIcon,
  ArrowUpRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const navLinks: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Wrench },
  { id: "about", label: "About", icon: CircleUser },
  { id: "skills", label: "Skills", icon: Brain },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Send },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isMobileVisible, setIsMobileVisible] = useState<boolean>(true);
  const pathname = usePathname();
  const router = useRouter();
  const isProgrammaticScrollRef = useRef<boolean>(false);
  const lastScrollYRef = useRef<number>(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Handle mobile navbar auto-hide on scroll across all pages
  useEffect(() => {
    const handleMobileScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page or if sheet menu is open or during programmatic scroll
      if (
        currentScrollY < 50 ||
        isMobileOpen ||
        isProgrammaticScrollRef.current
      ) {
        setIsMobileVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollYRef.current;

      // Scrolling down with threshold: hide
      if (diff > 8 && currentScrollY > 60) {
        setIsMobileVisible(false);
      }
      // Scrolling up with threshold: show
      else if (diff < -8) {
        setIsMobileVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleMobileScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleMobileScroll);
  }, [isMobileOpen]);

  // Handle active section based on scroll and route
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/projects")) {
        setActiveSection("projects");
      } else {
        setActiveSection("");
      }
      return;
    }

    const handleScroll = () => {
      // Ignore scroll events during programmatic smooth-scroll to prevent indicator flick
      if (isProgrammaticScrollRef.current) {
        return;
      }

      // 1. If at top of page
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // 2. If at bottom of page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // 3. Check section positions from bottom to top
      const sectionIds = [
        "home",
        "services",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle anchor navigation on initial load or back/forward if on home page
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const element = document.getElementById(hashId);
      if (element) {
        isProgrammaticScrollRef.current = true;
        setActiveSection(hashId);

        setTimeout(() => {
          const topOffset = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - topOffset;
          window.scrollTo({
            top: hashId === "home" ? 0 : offsetPosition,
            behavior: "smooth",
          });

          setTimeout(() => {
            isProgrammaticScrollRef.current = false;
          }, 800);
        }, 150);
      }
    }
  }, [pathname]);

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);

    if (pathname === "/") {
      setActiveSection(id);
      isProgrammaticScrollRef.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const element = document.getElementById(id);
      if (element) {
        const topOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: id === "home" ? 0 : offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", id === "home" ? "/" : `#${id}`);
      }

      // Unlock after scroll finishes
      const onScrollEnd = () => {
        isProgrammaticScrollRef.current = false;
        window.removeEventListener("scrollend", onScrollEnd);
      };

      if ("onscrollend" in window) {
        window.addEventListener("scrollend", onScrollEnd, { once: true });
      }

      // Fallback timer in case scrollend doesn't fire or browser doesn't support it
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
        window.removeEventListener("scrollend", onScrollEnd);
      }, 800);
    } else {
      router.push(id === "home" ? "/" : `/#${id}`);
    }
  };

  return (
    <>
      {/* ================= DESKTOP FLOATING GLASSMORPHIC NAVBAR ================= */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-1 rounded-full border border-white/10 bg-richBlack/75 backdrop-blur-xl p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300"
        >
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={cn(
                  "relative hover:cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-classicGold/50",
                  isActive
                    ? "text-classicGold"
                    : "text-lightGrey/75 hover:text-offWhite hover:bg-white/5"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-full bg-classicGold/15 border border-classicGold/40 shadow-[0_0_12px_rgba(212,175,55,0.25)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* ================= MOBILE FLOATING BAR WITH SHADCN SHEET ================= */}
      <header
        className={cn(
          "fixed top-2 inset-x-3 sm:inset-x-4 z-50 md:hidden transition-transform duration-300 ease-in-out",
          isMobileVisible ? "translate-y-0" : "-translate-y-24"
        )}
      >
        <div className="flex items-center justify-between px-6 py-1 rounded-full border border-white/10 bg-richBlack/80 backdrop-blur-xl shadow-lg shadow-black/40">
          <button
            onClick={() => handleNavClick("home")}
            className="text-base font-bold tracking-wider text-offWhite flex items-center gap-0.5 outline-none"
          >
            Jobayer<span className="text-classicGold">.</span>
          </button>

          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="p-1.5 rounded-full text-lightGrey hover:text-offWhite hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-classicGold/50"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[320px] bg-richBlack/95 backdrop-blur-2xl border-l border-white/10 text-offWhite flex flex-col justify-between p-6"
            >
              <div>
                <SheetHeader className="text-left pb-4 border-b border-white/10">
                  <SheetTitle className="text-lg font-bold text-offWhite flex items-center gap-0.5">
                    Jobayer<span className="text-classicGold">.</span>
                  </SheetTitle>
                  <SheetDescription className="text-xs text-lightGrey/60">
                    Full Stack Developer
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-2 mt-6">
                  {navLinks.map(({ id, icon: Icon, label }) => {
                    const isActive = activeSection === id;
                    return (
                      <button
                        key={id}
                        onClick={() => handleNavClick(id)}
                        className={cn(
                          "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left",
                          isActive
                            ? "bg-classicGold/15 text-classicGold border border-classicGold/30 shadow-[0_0_10px_rgba(212,175,55,0.15)]"
                            : "text-lightGrey/80 hover:text-offWhite hover:bg-white/5"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <Icon
                          className={cn(
                            "size-4",
                            isActive ? "text-classicGold" : "text-lightGrey/60"
                          )}
                        />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/projects"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-lightGrey hover:text-offWhite bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span>All Projects Archive</span>
                  <ArrowUpRight className="size-3.5 text-classicGold" />
                </Link>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-classicGold text-richBlack hover:bg-classicGold/90 transition-colors shadow-md shadow-classicGold/20"
                >
                  Let&apos;s Connect
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Navbar;
