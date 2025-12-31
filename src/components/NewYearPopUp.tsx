import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

export function NewYearPopup() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Confetti burst
    confetti({
      particleCount: 120,
      spread: 80,
      startVelocity: 30,
      colors: ["#fbcfe8", "#fda4af", "#fde68a"],
      origin: { y: 0.6 },
    });

    // Auto fade out
    const timer = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center px-10 py-12 rounded-3xl bg-white/80 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Happy New Year ✨
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
             Another year. Stronger than before. 💪
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
