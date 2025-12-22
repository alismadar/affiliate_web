'use client'

import { motion } from "framer-motion";
import { Instagram, Facebook, Send, ExternalLink } from "lucide-react";

const platformConfig = {
  instagram: {
    icon: Instagram,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    bgGradient: "from-pink-50 to-purple-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-pink-500 hover:via-rose-500 hover:to-purple-600",
    borderColor: "border-pink-200",
    title: "אינסטגרם",
    description: "עקבו אחרינו לתוכן ויזואלי יומי וסטוריז"
  },
  facebook: {
    icon: Facebook,
    gradient: "from-blue-600 to-blue-700",
    bgGradient: "from-blue-50 to-indigo-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700",
    borderColor: "border-blue-200",
    title: "פייסבוק",
    description: "הצטרפו לקהילה שלנו לדיונים ועדכונים"
  },
  telegram: {
    icon: Send,
    gradient: "from-sky-400 to-blue-500",
    bgGradient: "from-sky-50 to-blue-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-500",
    borderColor: "border-sky-200",
    title: "טלגרם",
    description: "קבלו התראות מיידיות ומבצעים אקסקלוסיביים"
  }
};

const getGroupEmoji = (name: string) => {
  if (name.includes('Baby Love')) return String.fromCodePoint(0x1F476); // 👶
  if (name.includes('זנב') || name.includes('חברים עם')) return String.fromCodePoint(0x1F43E); // 🐾
  if (name.includes('גאגט') || name.includes('טכנולוגיה')) return String.fromCodePoint(0x1F916); // 🤖
  if (name.includes('תחפושות') || name.includes('פורים')) return String.fromCodePoint(0x1F3AD); // 🎭
  if (name.includes('עיצוב') || name.includes('בית')) return String.fromCodePoint(0x1F3E0); // 🏠
  return String.fromCodePoint(0x2728); // ✨
};

interface Link {
  id: string;
  name: string;
  url: string;
  platform: "instagram" | "facebook" | "telegram";
  order?: number;
}

interface PlatformSectionProps {
  platform: "instagram" | "facebook" | "telegram";
  links: Link[];
  index: number;
}

export default function PlatformSection({ platform, links, index }: PlatformSectionProps) {
  const config = platformConfig[platform];
  const Icon = config.icon;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`py-16 md:py-24 bg-gradient-to-br ${config.bgGradient}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${config.gradient} shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {config.title}
            </h2>
            <p className="text-slate-600 mt-1">{config.description}</p>
          </div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`
                group relative bg-white rounded-2xl p-6 border ${config.borderColor}
                shadow-sm hover:shadow-xl transition-all duration-300
                ${config.hoverBg} hover:border-transparent
              `}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-3xl leading-none inline-block" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }} role="img" aria-label="emoji">{getGroupEmoji(link.name)}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-white transition-colors duration-300 text-lg">
                      {link.name}
                    </h3>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-white/20 transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
          
          {links.length < 5 && [...Array(5 - links.length)].map((_, i) => (
            <motion.div
              key={`placeholder-${i}`}
              variants={itemVariants}
              className={`
                bg-white/50 rounded-2xl p-6 border border-dashed ${config.borderColor}
                flex items-center justify-center
              `}
            >
              <p className="text-slate-400 text-sm text-center">בקרוב</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
