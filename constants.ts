import { Category, QuestionCardData } from './types';

export const INITIAL_QUESTIONS: QuestionCardData[] = [
  {
    id: 'q1',
    category: Category.PAYMENT,
    question: "Can I use my Visa or Mastercard in China?",
    answer: "Major international hotels and high-end restaurants may accept them, but for daily life (street food, taxis, convenience stores), they are rarely accepted directly. You should link your foreign credit card to **Alipay** or **WeChat Pay**, which are accepted everywhere."
  },
  {
    id: 'q2',
    category: Category.INTERNET,
    question: "Do Google, Facebook, and Instagram work?",
    answer: "No, most Western social media and Google services are blocked by the Great Firewall. You will need a reliable **VPN** installed *before* you arrive, or preferably, purchase a **travel eSIM** (like Holafly or Airalo) which automatically routes traffic outside the firewall."
  },
  {
    id: 'q3',
    category: Category.ESSENTIALS,
    question: "Do I need a visa to visit China?",
    answer: "Most visitors need a visa. However, the **144-hour visa-free transit** policy allows travelers from 54 countries to visit specific regions (like Shanghai, Beijing, Guangdong) for up to 6 days if they have a connecting flight to a third country/region."
  },
  {
    id: 'q4',
    category: Category.TRANSPORT,
    question: "How do I buy high-speed train tickets?",
    answer: "You can buy tickets at the station with your passport, but lines are long. The easiest way for foreigners is to use the **Trip.com** app or the official **Railway 12306** app (which now has an English version). Book at least a few days in advance for popular routes."
  },
  {
    id: 'q5',
    category: Category.CULTURE,
    question: "Is tipping expected in restaurants?",
    answer: "No, tipping is **not part of Chinese culture**. In fact, offering a tip can sometimes be seen as rude or confusing. The price on the menu is the final price. High-end hotels might add a service charge automatically."
  },
  {
    id: 'q6',
    category: Category.FOOD,
    question: "Is street food safe to eat?",
    answer: "Generally, yes, and it's delicious! Look for stalls with long lines of locals—high turnover ensures freshness. Avoid tap water; always drink bottled or boiled water."
  },
  {
    id: 'q7',
    category: Category.TRANSPORT,
    question: "Do taxi drivers speak English?",
    answer: "Rarely. It is essential to have your destination written in **Chinese characters** (Hanzi) to show the driver. Alternatively, use the **Didi** app (China's Uber), which has an English interface and auto-translates messages."
  },
  {
    id: 'q8',
    category: Category.ESSENTIALS,
    question: "What apps must I download before arriving?",
    answer: "The 'Holy Trinity' of Chinese apps for tourists: **Alipay** (payment & transport), **Didi** (rides), and **Trip.com** (trains/hotels). **Apple Maps** works well in China, or **Baidu Maps** if you can read some Chinese."
  }
];

export const CATEGORY_COLORS: Record<Category, string> = {
  [Category.ESSENTIALS]: 'bg-red-100 text-red-800 border-red-200',
  [Category.PAYMENT]: 'bg-amber-100 text-amber-800 border-amber-200',
  [Category.TRANSPORT]: 'bg-blue-100 text-blue-800 border-blue-200',
  [Category.CULTURE]: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  [Category.FOOD]: 'bg-orange-100 text-orange-800 border-orange-200',
  [Category.INTERNET]: 'bg-purple-100 text-purple-800 border-purple-200',
  [Category.AI_GENERATED]: 'bg-stone-200 text-stone-800 border-stone-300'
};
