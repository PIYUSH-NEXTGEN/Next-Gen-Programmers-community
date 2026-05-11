import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="brutal-card overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-mono text-[13px] md:text-sm font-semibold text-foreground">
          {faq.question}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border"
          >
            <p className="px-6 py-5 font-mono text-[13px] text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
