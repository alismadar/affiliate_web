'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span>חזרה לעמוד הבית</span>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hebrew Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            זכויות שמורות
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">כל הזכויות שמורות</h2>
              <p className="mb-4">
                אתר זה וכל התוכן המוצג בו, כולל אך לא רק: טקסטים, תמונות, לוגואים, גרפיקה, 
                עיצוב, קוד ותוכנה, הם רכוש של SmadarExpress ומוגנים על ידי חוקי זכויות יוצרים 
                בישראל ובעולם.
              </p>
              <p className="mb-4">
                כל השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן. שימוש באתר מהווה הסכמה 
                מלאה לתנאים אלה.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">שימוש מותר</h2>
              <p className="mb-4">
                מותר לך לעיין בתוכן האתר לשימוש אישי ולא מסחרי בלבד. אסור להעתיק, לשכפל, 
                להפיץ, למכור או להשתמש בתוכן זה למטרות מסחריות ללא אישור מפורש בכתב 
                מ-SmadarExpress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">קשרי שותפות ושיווק שותפים</h2>
              <p className="mb-4">
                SmadarExpress משתתפת בתוכניות שותפים ושיווק שותפים (Affiliate Marketing) עם 
                ספקים שונים. כאשר אתה לוחץ על קישורים באתר זה ומבצע רכישה, אנו עשויים לקבל 
                עמלה מהספק. זה לא משפיע על המחיר שאתה משלם עבור המוצר או השירות.
              </p>
              <p className="mb-4">
                <strong className="text-slate-900">חשוב להבין:</strong> SmadarExpress אינה מוכרת, 
                מספקת או אחראית למוצרים או שירותים המוצגים באתר. כל הרכישות מתבצעות ישירות 
                עם הספקים החיצוניים, והתנאים והמדיניות שלהם חלים על כל עסקה.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">הגבלת אחריות למוצרים ושירותים</h2>
              <p className="mb-4">
                SmadarExpress אינה אחראית ואינה נושאת באחריות כלשהי לגבי:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 mr-4">
                <li>איכות, ביצועים או התאמה של מוצרים או שירותים שנרכשו דרך קישורים באתר</li>
                <li>משלוחים, עיכובים, נזקים במשלוח או אובדן חבילות</li>
                <li>מדיניות החזרות, החלפות או ביטולים של הספקים</li>
                <li>שינויים במחירים, זמינות מוצרים או מבצעים</li>
                <li>תקלות טכניות, שגיאות או בעיות באתרי הספקים</li>
                <li>כל נזק ישיר, עקיף, מקרי או תוצאתי הנובע מרכישה או שימוש במוצרים/שירותים</li>
              </ul>
              <p className="mb-4">
                כל תלונות, שאלות או בעיות הקשורות למוצרים או שירותים שנרכשו יש להפנות ישירות 
                לספק הרלוונטי. SmadarExpress אינה מתווכת ואינה מתערבת בעסקאות בין המשתמש לספקים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">אין אחריות או ערבות</h2>
              <p className="mb-4">
                SmadarExpress אינה נותנת כל ערבות, הבטחה או התחייבות מפורשת או משתמעת לגבי:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 mr-4">
                <li>דיוק, שלמות או עדכניות המידע המוצג באתר</li>
                <li>התאמת המוצרים לצרכים או לציפיות שלך</li>
                <li>זמינות או המשכיות של שירותי הספקים</li>
                <li>תוצאות או ביצועים של מוצרים או שירותים</li>
              </ul>
              <p className="mb-4">
                המשתמש נושא באחריות מלאה לבדיקת המידע, השוואת מחירים, קריאת תנאי השימוש 
                של הספקים וקבלת החלטות רכישה מושכלות.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">קישורים לאתרים חיצוניים</h2>
              <p className="mb-4">
                האתר מכיל קישורים לאתרים חיצוניים של פלטפורמות מדיה חברתית (Instagram, Facebook, 
                Telegram) וכן קישורים לספקים וחנויות מקוונות. SmadarExpress אינה אחראית לתוכן, 
                מדיניות הפרטיות, תנאי השימוש או מדיניות הרכישה של אתרים אלה. השימוש באתרים אלה 
                כפוף לתנאים ולמדיניות שלהם בלבד.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">הגבלת אחריות כללית</h2>
              <p className="mb-4">
                SmadarExpress אינה אחראית לכל נזק ישיר, עקיף, מקרי, תוצאתי או מיוחד שייגרם כתוצאה 
                משימוש באתר זה, מהסתמכות על המידע המוצג בו, מרכישה דרך קישורים באתר, או מכל 
                פעולה אחרת הקשורה לאתר. השימוש באתר, במידע וברכישות דרך הקישורים הוא על אחריות 
                המשתמש בלבד.
              </p>
              <p className="mb-4">
                במידה המרבית המותרת על פי החוק, אחריותה הכוללת של SmadarExpress מוגבלת לסכום 
                העמלה שקיבלה מהעסקה הספציפית, אם בכלל.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">שינויים בתנאים</h2>
              <p className="mb-4">
                SmadarExpress שומרת לעצמה את הזכות לעדכן ולשנות את תנאי השימוש בכל עת. 
                מומלץ לעיין בתנאים מעת לעת כדי להיות מעודכן בשינויים.
              </p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                עדכון אחרון: {new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </motion.div>

        {/* English Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          dir="ltr"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Copyright & Terms of Use
          </h1>
          
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">All Rights Reserved</h2>
              <p className="mb-4">
                This website and all content displayed on it, including but not limited to: texts, images, 
                logos, graphics, design, code and software, are the property of SmadarExpress and are 
                protected by copyright laws in Israel and worldwide.
              </p>
              <p className="mb-4">
                All use of this website is subject to the terms of use detailed below. Use of the website 
                constitutes full agreement to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Permitted Use</h2>
              <p className="mb-4">
                You are permitted to browse the website content for personal and non-commercial use only. 
                It is prohibited to copy, reproduce, distribute, sell or use this content for commercial 
                purposes without explicit written permission from SmadarExpress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Affiliate Relationships and Marketing</h2>
              <p className="mb-4">
                SmadarExpress participates in affiliate programs and affiliate marketing with various 
                vendors. When you click on links on this website and make a purchase, we may receive a 
                commission from the vendor. This does not affect the price you pay for the product or service.
              </p>
              <p className="mb-4">
                <strong className="text-slate-900">Important to understand:</strong> SmadarExpress does not 
                sell, provide, or assume responsibility for products or services displayed on the website. 
                All purchases are made directly with external vendors, and their terms and policies apply to 
                every transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability for Products and Services</h2>
              <p className="mb-4">
                SmadarExpress is not responsible and assumes no liability whatsoever regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Quality, performance, or suitability of products or services purchased through links on the website</li>
                <li>Shipping, delays, shipping damage, or package loss</li>
                <li>Return, exchange, or cancellation policies of vendors</li>
                <li>Price changes, product availability, or promotions</li>
                <li>Technical failures, errors, or issues on vendor websites</li>
                <li>Any direct, indirect, incidental, or consequential damages arising from purchase or use of products/services</li>
              </ul>
              <p className="mb-4">
                All complaints, questions, or issues related to products or services purchased should be 
                directed to the relevant vendor. SmadarExpress does not mediate or intervene in transactions 
                between users and vendors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">No Warranties or Guarantees</h2>
              <p className="mb-4">
                SmadarExpress makes no warranties, promises, or representations, express or implied, regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Accuracy, completeness, or currency of information displayed on the website</li>
                <li>Suitability of products for your needs or expectations</li>
                <li>Availability or continuity of vendor services</li>
                <li>Results or performance of products or services</li>
              </ul>
              <p className="mb-4">
                The user assumes full responsibility for verifying information, comparing prices, reading 
                vendor terms of use, and making informed purchasing decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to External Websites</h2>
              <p className="mb-4">
                The website contains links to external social media platforms (Instagram, Facebook, 
                Telegram) as well as links to vendors and online stores. SmadarExpress is not responsible 
                for the content, privacy policy, terms of use, or purchase policies of these websites. 
                Use of these websites is subject solely to their terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">General Limitation of Liability</h2>
              <p className="mb-4">
                SmadarExpress is not responsible for any direct, indirect, incidental, consequential, or 
                special damages that may result from the use of this website, reliance on the information 
                displayed on it, purchases made through links on the website, or any other action related 
                to the website. Use of the website, information, and purchases through links is at the 
                user's sole responsibility.
              </p>
              <p className="mb-4">
                To the maximum extent permitted by law, SmadarExpress's total liability is limited to the 
                amount of commission received from the specific transaction, if any.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
              <p className="mb-4">
                SmadarExpress reserves the right to update and change the terms of use at any time. 
                It is recommended to review the terms from time to time to stay updated on changes.
              </p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>חזרה לעמוד הבית</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

