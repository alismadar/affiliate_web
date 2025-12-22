// Base44 API Client
// Replace this with your actual base44 SDK import and configuration

import { mockSocialLinks } from './mockData';

interface SocialLink {
  id: string;
  name: string;
  url: string;
  platform: "instagram" | "facebook" | "telegram";
  order?: number;
}

class Base44EntityClient<T> {
  constructor(private entityName: string) {}

  async list(sortBy?: string): Promise<T[]> {
    // Check if we have mock data for this entity
    if (this.entityName === "SocialLink") {
      // Use mock data for now
      let data = [...mockSocialLinks] as unknown as T[];
      
      // Sort by order if requested
      if (sortBy === "order") {
        data = data.sort((a: any, b: any) => {
          const orderA = a.order ?? 999;
          const orderB = b.order ?? 999;
          return orderA - orderB;
        }) as T[];
      }
      
      return data;
    }
    
    // Try to fetch from API if configured
    const apiUrl = process.env.NEXT_PUBLIC_BASE44_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_BASE44_API_KEY;
    
    if (apiUrl && apiKey) {
      try {
        const response = await fetch(
          `${apiUrl}/entities/${this.entityName}${sortBy ? `?sort=${sortBy}` : ''}`,
          {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          return response.json();
        } else {
          console.warn(`Failed to fetch ${this.entityName}:`, response.statusText);
        }
      } catch (error) {
        console.warn(`Error fetching ${this.entityName}:`, error);
      }
    }
    
    // Fallback to mock data or empty array
    if (this.entityName === "SocialLink") {
      return mockSocialLinks as unknown as T[];
    }
    
    return [];
  }

  async get(id: string): Promise<T> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE44_API_URL || 'https://api.base44.com'}/entities/${this.entityName}/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BASE44_API_KEY || ''}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${this.entityName} with id ${id}`);
    }

    return response.json();
  }
}

class Base44Client {
  entities = {
    SocialLink: new Base44EntityClient<SocialLink>("SocialLink"),
  };
}

export const base44 = new Base44Client();



