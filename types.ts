export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AIResponse {
  analysis: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Emergency';
  recommendedService: string;
}

export enum GutterMaterial {
  ALUMINUM = 'Aluminum',
  COPPER = 'Copper',
  STEEL = 'Steel',
  VINYL = 'Vinyl'
}