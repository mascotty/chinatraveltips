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
  answer: string;
  category: Category;
  isExpanded?: boolean;
}

export interface AskAIResponse {
  answer: string;
}
