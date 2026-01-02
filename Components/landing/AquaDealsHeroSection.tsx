'use client'

import { motion } from "framer-motion";
import Image from "next/image";

// Add your aquarium image URLs here for background
// You can use local images from /public/aquarium/ or external URLs
// Example local images: '/aquarium/aquarium1.jpg'
// Example external URLs: 'https://example.com/aquarium1.jpg'
const aquariumBackgroundImages = [
  // Uncomment and add your image paths here:
  '/aquarium/aquadeals.png',
  // '/aquarium/aquarium2.jpg',
];

export default function AquaDealsHeroSection() {
  const mainBackgroundImage = aquariumBackgroundImages[0] || null;
  
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Aquarium background images */}
      {mainBackgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={mainBackgroundImage}
            alt="Aquarium background"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </div>
      )}
      
      {/* Background gradient overlay - lighter for more visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-white/50 to-slate-100/60 z-0" />
      
      {/* Additional background images for depth */}
      {aquariumBackgroundImages.length > 1 && (
        <>
          <div className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-20">
            <Image
              src={aquariumBackgroundImages[1]}
              alt="Aquarium background 2"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        </>
      )}
      
      {/* Decorative blur elements - reduced opacity for more background visibility */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/10 to-cyan-200/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/10 to-blue-200/10 rounded-full blur-3xl z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 drop-shadow-lg">
            ברוכים הבאים ל
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 drop-shadow-md">
              AquaDeals ישראל
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-black mb-2 drop-shadow-md">
            מבצעים מיוחדים על מוצרי אקווריום! 🐠🌊
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-slate-900 max-w-3xl mx-auto leading-relaxed space-y-4"
        >
          <p className="font-bold text-black drop-shadow-sm">
            גלו את המבצעים הטובים ביותר על מוצרי אקווריום! אנחנו סורקים את הרשת סביב השעון 
            כדי למצוא עבורכם את המחירים הטובים ביותר על ציוד אקווריום, דגים, צמחי מים וכל מה שצריך 
            לאקווריום המושלם שלכם.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-6 mb-6"
          >
            <a
              href="https://t.me/+qmkKWYV5qS5hMzU0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-2.415 11.394-2.415 11.394-.18.717-.54.896-.896.717-.358-.18-5.95-4.124-5.95-4.124s4.484-4.305 4.663-4.484c.18-.18.18-.36 0-.54-.18-.18-4.663 2.954-4.663 2.954s-.538-.18-1.075-.358c-.537-.179-1.254-.359-1.254-.359s-.717-.18-.358-.717c.358-.537 8.048-7.69 8.048-7.69s.717-.538 1.075-.18c.358.359.717 1.076.717 1.076s.18.717 0 1.076z"/>
              </svg>
              <span>הצטרפו לטלגרם</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </motion.div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900 mb-4 drop-shadow-sm">למה AquaDeals?</h3>
            <div className="space-y-3 text-right">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✅</span>
                <div>
                  <span className="font-semibold text-slate-800">מבצעים בלעדיים:</span>
                  <span className="text-slate-600"> רק המחירים הטובים ביותר על מוצרי אקווריום.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✅</span>
                <div>
                  <span className="font-semibold text-slate-800">מגוון רחב:</span>
                  <span className="text-slate-600"> ציוד, דגים, צמחי מים, תאורה, פילטרים ועוד.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✅</span>
                <div>
                  <span className="font-semibold text-slate-800">עדכונים שוטפים:</span>
                  <span className="text-slate-600"> התראות מיידיות על מבצעים חדשים בטלגרם.</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg font-semibold text-slate-800 pt-2 drop-shadow-sm">
            הצטרפו אלינו ותהנו ממבצעים מיוחדים על כל מה שצריך לאקווריום שלכם. 💎
          </p>
        </motion.div>
      </div>
    </section>
  );
}

