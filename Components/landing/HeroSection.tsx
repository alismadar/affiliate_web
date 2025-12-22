'use client'

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
            ברוכים הבאים ל
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              SmadarExpress
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-slate-700 mb-2">
            מהפכת הקניות שלכם! 🤖🛒
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-4"
        >
          <p>
            אנחנו כאן כדי לשנות את הדרך שבה אתם קונים ברשת. במקום שתבזבזו שעות בחיפושים והשוואות, 
            האלגוריתם החכם שלנו (AI) עושה את העבודה הקשה בשבילכם. הוא סורק את הרשת סביב השעון, 
            מאתר ירידות מחיר ומוודא שהמוצרים עומדים בסטנדרט איכות גבוה.
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">למה אנחנו?</h3>
            <div className="space-y-3 text-right">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✅</span>
                <div>
                  <span className="font-semibold text-slate-800">סינון חכם:</span>
                  <span className="text-slate-600"> רק מוצרים עם דירוגים גבוהים ומחיר משתלם.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✅</span>
                <div>
                  <span className="font-semibold text-slate-800">מגוון רחב:</span>
                  <span className="text-slate-600"> גאדג'טים, לייף-סטייל, בית, אופנה ועוד.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✅</span>
                <div>
                  <span className="font-semibold text-slate-800">בוט אישי:</span>
                  <span className="text-slate-600"> עוזר קניות וירטואלי שמחפש עבורכם כל מוצר ספציפי שתרצו – רק תבקשו בצ'אט!</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg font-semibold text-slate-800 pt-2">
            הצטרפו אלינו ותתחילו לקנות חכם יותר, מהר יותר וזול יותר. 💎
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://t.me/smadar_express_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-2.415 11.394-2.415 11.394-.18.717-.54.896-.896.717-.358-.18-5.95-4.124-5.95-4.124s4.484-4.305 4.663-4.484c.18-.18.18-.36 0-.54-.18-.18-4.663 2.954-4.663 2.954s-.538-.18-1.075-.358c-.537-.179-1.254-.359-1.254-.359s-.717-.18-.358-.717c.358-.537 8.048-7.69 8.048-7.69s.717-.538 1.075-.18c.358.359.717 1.076.717 1.076s.18.717 0 1.076z"/>
            </svg>
            <span>הבוט החכם שלנו בטלגרם 🤖</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}



