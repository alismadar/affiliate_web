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
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pb-28">
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 drop-shadow-md">
              ציוד לאקווריום במחירים שלא רואים בארץ
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-black mb-2 drop-shadow-md">
            רק מוצרים שבאמת שווים - בלי ספאם
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-slate-900 max-w-3xl mx-auto leading-relaxed space-y-4"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50">
            <div className="space-y-3 text-right">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✅</span>
                <span className="font-bold text-black drop-shadow-sm text-lg">סינון יומי של ציוד לאקווריום</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✅</span>
                <span className="font-bold text-black drop-shadow-sm text-lg">רק מוצרים עם ביקורות גבוהות</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✅</span>
                <span className="font-bold text-black drop-shadow-sm text-lg">מחירים זולים משמעותית מהחנויות בארץ</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50">
            <h4 className="text-lg font-bold text-slate-900 mb-3 text-right">🔥 דוגמה למה שעולה פה:</h4>
            <div className="space-y-2 text-right">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐠</span>
                <span className="font-semibold text-slate-800">מזין דגים אוטומטי – ירד מ־₪61 ל-₪28</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="font-semibold text-slate-800">דקורציה לאקווריום בצורת חבית/גזע עץ - רק-₪18 (68% הנחה!)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧼</span>
                <span className="font-semibold text-slate-800">תאורת LED מחליפת צבעים עם בועות לאקווריום – אחד הנמכרים בערוץ! רק 28 שקל!</span>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50/80 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50 mt-4">
            <div className="flex items-center justify-center gap-2 text-right">
              <span className="text-2xl">⏰</span>
              <div>
                <p className="font-bold text-slate-900 text-lg">הדילים מתחלפים כל הזמן</p>
                <p className="text-slate-700">מי שלא בפנים – מפספס</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fixed bottom bar - no bar background, just the buttons. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="fixed bottom-5 left-0 right-0 z-[100] flex justify-center px-4"
      >
        <div className="flex justify-between items-stretch gap-3 max-w-2xl w-full">
          <a
            href="https://chat.whatsapp.com/EgHGdTXurB65X7mBpFH88t?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 inline-flex items-center justify-center gap-3 px-5 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 min-h-[52px]"
          >
            <svg className="w-8 h-8 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>לקבוצה הוואטסאפ</span>
          </a>
          <a
            href="https://t.me/AquaDealsIsrael"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 inline-flex items-center justify-center gap-3 px-5 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 min-h-[52px]"
          >
            <svg className="w-8 h-8 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>לקבוצת הטלגרם</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

