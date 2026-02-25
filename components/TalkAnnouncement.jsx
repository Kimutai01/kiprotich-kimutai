import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TalkAnnouncement = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.1, type: "spring", stiffness: 260, damping: 20 } }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 z-10 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold shadow-lg hover:bg-gray-100 transition"
              aria-label="Close"
            >
              ×
            </button>
            <a
              href="https://www.elixirconf.eu/participants/kimutai-kiprotich/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/talk.jpeg"
                alt="Building Real-Time AI Agents with Elixir — ElixirConf EU 2026, Málaga Spain — Kimutai Kiprotich"
                className="w-full rounded-xl shadow-2xl cursor-pointer"
              />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TalkAnnouncement;
