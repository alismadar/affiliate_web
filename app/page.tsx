'use client'

import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import HeroSection from "@/components/landing/HeroSection";
import PlatformSection from "@/components/landing/PlatformSection";
import Footer from "@/components/landing/Footer";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: links = [], isLoading, error } = useQuery({
    queryKey: ["socialLinks"],
    queryFn: () => base44.entities.SocialLink.list("order"),
    retry: false,
  });

  const instagramLinks = (links || []).filter((l) => l.platform === "instagram");
  const facebookLinks = (links || []).filter((l) => l.platform === "facebook");
  const telegramLinks = (links || []).filter((l) => l.platform === "telegram");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (error) {
    console.error('Error loading social links:', error);
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <HeroSection />
      
      <PlatformSection 
        platform="instagram" 
        links={instagramLinks} 
        index={0} 
      />
      
      <PlatformSection 
        platform="facebook" 
        links={facebookLinks} 
        index={1} 
      />
      
      <PlatformSection 
        platform="telegram" 
        links={telegramLinks} 
        index={2} 
      />
      
      <Footer />
    </div>
  );
}
