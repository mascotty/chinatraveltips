export enum Category {
  ESSENTIALS = 'Essentials',
  PAYMENT = 'Payment',
  TRANSPORT = 'Transport',
  CULTURE = 'Culture',
  FOOD = 'Food',
  INTERNET = 'Internet',
  AI_GENERATED = 'AI Response'
}

export interface QuestionCardData {
  id: string;
  question: string;
  answer: string; // Short preview text
  details?: string; // Full rich text content
  images?: string[]; // Array of image URLs
  category: Category;
}

export interface AskAIResponse {
  answer: string;
}