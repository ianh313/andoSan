"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const c = content.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled
            ? "py-4 bg-paper/85 backdrop-blur-md border-b border-amber-deep/8"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-3 group">
            <span className="display text-[1.4rem] tracking-wider2 text-ink group-hover:text-amber-deep transition-colors duration-700">
              {c.brand.en}
            </span>
            <span className="hidden md:inline zh-light text-[0.7rem] tracking-wider2 text-ink-mute/70">
              {c.brand.zh}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            <span className="eyebrow-dim hidden xl:inline">
              {c.eyebrowDim}
            </span>
            <a href="#talk" className="btn-ghost !py-2 !px-4 text-xs">
              {c.cta}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3"
              aria-label="Open index"
            >
              <span className="eyebrow group-hover:text-ink transition-colors duration-500">
                Index
              </span>
              <div className="flex flex-col gap-[3px]">
                <span className="block w-5 h-px bg-amber-deep/70" />
                <span className="block w-3 h-px bg-amber-deep/70 ml-auto" />
              </div>
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-[5px] py-2"
            aria-label="Open index"
          >
            <span className="block w-6 h-px bg-ink/80" />
            <span className="block w-4 h-px bg-ink/80 ml-auto" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
            className="fixed inset-0 z-[70] bg-paper/97 backdrop-blur-xl"
          >
            <div className="relative h-full w-full flex flex-col">
              <div className="flex items-center justify-between px-6 md:px-10 py-6">
                <span className="display text-[1.2rem] tracking-wider2 text-ink">
                  {c.brand.en}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="eyebrow text-ink-mute hover:text-ink"
                >
                  Close · 關閉
                </button>
              </div>

              <div className="flex-1 flex items-center">
                <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
                  <p className="eyebrow-dim mb-8">Index · 目錄</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                    {c.links.map((l, i) => (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.04 * i }}
                      >
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline justify-between gap-6 py-3 border-b border-amber-deep/8 hover:border-amber-deep/35 transition-colors duration-500"
                        >
                          <span className="display text-2xl md:text-3xl text-ink/85 group-hover:text-ink transition-colors duration-500">
                            {l.label}
                          </span>
                          <span className="eyebrow-dim group-hover:text-amber-deep transition-colors">
                            {l.en}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 md:px-10 py-6 flex items-center justify-between">
                <span className="eyebrow-dim">
                  AI 處理訊息 · 人完成感動
                </span>
                <span className="zh-light text-ink-mute/60 text-xs">v0.3</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
