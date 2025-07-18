"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function BlackHoleVideo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (theme !== 'dark') return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none"
    >
      <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black/40 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 animate-pulse opacity-60"></div>
        </div>
    </motion.div>
  );
}