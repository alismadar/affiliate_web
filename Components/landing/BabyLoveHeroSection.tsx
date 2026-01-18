'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Background image for baby products
const babyBackgroundImage = '/baby/baby_love.jpg';

// Product images for slider - Add your images here
const productImages = [
  { src: '/baby/products/product1.png', alt: 'בקבוקי תינוק איכותיים', title: 'בקבוקי תינוק איכותיים', description: 'עם מדידות ומגוון גדלים' },
  { src: '/baby/products/product2.png', alt: 'בגדי תינוקות', title: 'בגדי תינוקות מעוצבים ונוחים', description: 'בדים רכים שכל תינוק אוהב' },
  { src: '/baby/products/product3.png', alt: 'צעצועים ובביות', title: 'צעצועים ובביות רכים', description: 'לבטיחות הקטנים שלנו' },
  { src: '/baby/products/product4.png', alt: 'מוצרי טיפוח ואמבטיה', title: 'מוצרי טיפוח ואמבטיה', description: 'כל מה שצריך לאמבטיה חמה ונעימה' },
  { src: '/baby/products/product5.png', alt: 'שמיכות ומוצרי טקסטיל', title: 'שמיכות ומוצרי טקסטיל', description: 'לנוחות מקסימלית של הקטן' },
];

export default function BabyLoveHeroSection() {
  const mainBackgroundImage = babyBackgroundImage || null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    // Reset timer when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 2000);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    // Reset timer when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 2000);
  };

  // Auto-slide every 2 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Baby products background image */}
      {mainBackgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={mainBackgroundImage}
            alt="Baby products background"
            fill
            className="object-cover opacity-120"
            priority
            sizes="100vw"
          />
        </div>
      )}
      
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20 z-0" />
      
      {/* Background gradient overlay - soft pastel colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/25 via-white/15 to-blue-50/25 z-0" />
      
      {/* Decorative blur elements - soft pastel colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 drop-shadow-lg">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-blue-400 drop-shadow-md">
              Baby Love
            </span>
            <span className="block text-3xl md:text-5xl font-semibold text-slate-800 mt-3 drop-shadow-sm">
              מוצרים לקטנים במחירים שפויים
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-4 drop-shadow-md">
            כי התינוק שלנו ראוי לטוב ביותר 💕
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-slate-800 max-w-3xl mx-auto leading-relaxed space-y-4"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-pink-200/50">
            <p className="text-lg text-slate-800 mb-4 text-right">
            אני יודעת כמה זה קשה למצוא מוצרים איכותיים במחיר שפוי. בדיוק בשביל זה אני כאן! ריכזתי עבורך את הדילים והמוצרים הכי טובים לקטנטנים – בקבוקים, טקסטיל רך, צעצועי התפתחות ועוד.
            </p>
            <div className="space-y-3 text-right">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">✅</span>
                <div>
                  <span className="font-bold text-slate-900 text-lg">סינון קפדני ואישי</span>
                  <span className="text-slate-700"> אני לא מעלה סתם "זבל". סיננתי בעצמי כל מוצר – אני מעלה רק דברים שאני הייתי קונה בלב שקט.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">⭐</span>
                <div>
                  <span className="font-bold text-slate-900 text-lg">דירוג גבוה ואמינות</span>
                  <span className="text-slate-700"> כל מוצר נבדק לפי ביקורות של אמהות אמיתיות שכבר קנו וקיבלו את המוצר.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">💰</span>
                <div>
                  <span className="font-bold text-slate-900 text-lg">מחירים שפויים (באמת)</span>
                  <span className="text-slate-700"> אותם מוצרים בדיוק שיש בארץ, רק בלי פערי התיווך. את הולכת לחסוך מאות שקלים בחודש.</span>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-6 mb-6"
          >
            <a
              href="https://t.me/+BxCbCRpxX9owMTI0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>הצטרפי אלינו ותפסיקי לשלם מחירי חנות 👶💕</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </motion.div>
          
          <div className="bg-white/85 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-200/50">
            <h4 className="text-lg font-bold text-slate-900 mb-4 text-right">✨ דוגמאות למה שעולה אצלנו:</h4>
            
            {/* Image Slider */}
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-slate-100">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={productImages[currentImageIndex].src}
                    alt={productImages[currentImageIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </motion.div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                  aria-label="תמונה קודמת"
                >
                  <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                  aria-label="תמונה הבאה"
                >
                  <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      // Reset timer when user clicks on dot
                      if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                      }
                      intervalRef.current = setInterval(() => {
                        setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
                      }, 2000);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-pink-500 w-6'
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`לך לתמונה ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50/90 backdrop-blur-sm rounded-xl p-5 border border-pink-200/60 mt-4">
            <div className="flex items-center justify-center gap-3 text-right">
              <span className="text-3xl">💖</span>
              <div>
                <p className="font-bold text-slate-900 text-lg">המחירים משתנים כל הזמן</p>
                <p className="text-slate-700">אם את לא בפנים - את מפספסת את הזדמנויות💕</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

