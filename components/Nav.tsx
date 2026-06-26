"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#premise", label: "Premise", zh: "前提" },
  { href: "#not-and-yes", label: "Not & Yes", zh: "我們不是 / 我們是" },
  { href: "#human-parts", label: "Human Parts", zh: "把人留給人" },
  { href: "#journey", label: "Journey", zh: "旅程" },
  { href: "#mechanisms", label: "Mechanisms", zh: "三個機制" },
  { href: "#console", label: "Console", zh: "旅館控制台" },
  { href: "#governance", label: "Governance", zh: "治理模型" },
  { href: "#components", label: "Components", zh: "十一個構件" },
  { href: "#asset", label: "Long Asset", zh: "長期資產" },
  { href: "#questions", label: "Open", zh: "開放問題" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled ? "py-4 bg-ink-deep/60 backdrop-blur-md" : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-3 group">
            <span className="display text-[1.4rem] tracking-wider2 text-cream group-hover:text-amber-soft transition-colors duration-700">
              ANDO
            </span>
            <span className="hidden md:inline zh-light text-[0.7rem] tracking-wider2 text-cream/40">
              安棟
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            <span className="eyebrow-dim">Internal · 0 to 1 specification</span>
            <button
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3"
              aria-label="Open index"
            >
              <span className="eyebrow group-hover:text-cream transition-colors duration-500">
                Index
              </span>
              <div className="flex flex-col gap-[3px]">
                <span className="block w-5 h-px bg-amber-soft/70" />
                <span className="block w-3 h-px bg-amber-soft/70 ml-auto" />
              </div>
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-[5px] py-2"
            aria-label="Open index"
          >
            <span className="block w-6 h-px bg-cream/80" />
            <span className="block w-4 h-px bg-cream/80 ml-auto" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[70] bg-ink-deep/95 backdrop-blur-xl"
          >
            <div className="absolute inset-0 grain pointer-events-none opacity-30" />
            <div className="relative h-full w-full flex flex-col">
              <div className="flex items-center justify-between px-6 md:px-10 py-6">
                <span className="display text-[1.2rem] tracking-wider2 text-cream">ANDO</span>
                <button
                  onClick={() => setOpen(false)}
                  className="eyebrow text-cream/70 hover:text-cream"
                >
                  Close · 關閉
                </button>
              </div>

              <div className="flex-1 flex items-center">
                <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
                  <p className="eyebrow-dim mb-8">Index · 目錄</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                    {links.map((l, i) => (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 * i }}
                      >
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline justify-between gap-6 py-3 border-b border-cream/5 hover:border-amber-soft/30 transition-colors duration-500"
                        >
                          <span className="display text-2xl md:text-3xl text-cream/85 group-hover:text-cream transition-colors duration-500">
                            {l.label}
                          </span>
                          <span className="zh-light text-cream/40 text-sm">{l.zh}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 md:px-10 py-6 flex items-center justify-between">
                <span className="eyebrow-dim">
                  Agent handles communication. Hotel delivers hospitality.
                </span>
                <span className="zh-light text-cream/30 text-xs">v0.2 · 內部規格版</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
