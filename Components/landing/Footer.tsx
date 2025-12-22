'use client'

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            נוצר באהבה <Heart className="w-4 h-4 text-red-500 fill-red-500" /> עבור הקהילה שלנו
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()}{' '}
            <Link 
              href="/terms" 
              className="hover:text-slate-300 transition-colors underline decoration-slate-600 hover:decoration-slate-400"
            >
              כל הזכויות שמורות
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}



