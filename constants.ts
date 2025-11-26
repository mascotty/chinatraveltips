import { Category, QuestionCardData } from './types';

// ==========================================
// 📝 HOW TO EDIT CONTENT (编辑指南)
// ==========================================
// 1. Text Formatting (文字格式):
//    - New Paragraph (换行): Press Enter.
//    - Bold (加粗): Wrap text in **asterisks**. Example: **Important**
//    - List (列表): Start line with "- ". Example: - Step 1
//
// 2. Images (图片):
//    - Cover Image (封面图): The FIRST URL in the `images: []` list is the cover.
//    - Inline Images (插入正文图片): 
//      To insert an image between paragraphs, use this format on a new line:
//      ![Image Caption Here](https://example.com/image.jpg)
//
// ==========================================

export const INITIAL_QUESTIONS: QuestionCardData[] = [
  {
    id: 'q1',
    category: Category.PAYMENT,
    question: "How do I set up WeChat Pay as a foreigner?",
    answer: "You can now link international credit cards directly to WeChat Pay without a Chinese bank account. It requires identity verification.",
    details: `
**The Complete Guide to WeChat Pay for Travelers**

China is becoming a cashless society. While cash is legally required to be accepted, in practice, vendors (especially street stalls and taxis) often struggle to make change. Setting up mobile payment is the single best thing you can do for your trip.

**Step 1: Download & Sign Up**
Download "WeChat" (or "Weixin") from the App Store or Google Play. Sign up using your international phone number. You might need a friend to scan a QR code to verify your account—if so, ask your hotel concierge or a friend who uses WeChat.
**1.Download your Alipay app to the latest version**
  Register with your phone number and sign in
**2. Get your valid identity document by your hand( Choose any of the following)**
  Passport for overseas users
  Mainland Travel Permit for Hong Kong/Macao/Taiwan residents who canalso choose passport
  Foreigner's Permanent Residence ldentity Card
**3. International Bank Card**
  Supported cards include Visa, Mastercard, JCB, Discover, Diners Club, andother major international credit/debit cards.
**4.Mobile Phone Number for Receiving SMS**
   supports internationalphone numbers.

![](https://i.imgur.com/QTNNZ3A.png)

**Step 2: Find the Wallet**
Open WeChat and go to the **Me** tab. You should see **Services** (or Wallet). 
*Troubleshooting:* If you don't see it, it's often because you haven't verified your identity yet. Try changing the app language to Chinese and back to English, or have someone send you a 1 RMB "Red Packet" in a chat.

![WeChat Wallet Interface Example](https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800)

**Step 3: Add Your Foreign Card**
1. Tap **Services** > **Wallet** > **Cards**.
2. Tap **Add a Card**.
3. Enter your card details (Visa, Mastercard, JCB, Diners Club, and Discover are all supported now).
4. **Crucial:** You must enter your name *exactly* as it appears on your passport.

![ ](https://www.shutterstock.com/shutterstock/photos/2451082037/display_1500/stock-photo-dhaka-bangladesh-april-wechat-logo-displayed-on-smartphone-2451082037.jpg)

**Step 4: Identity Verification**
WeChat needs to know you are real. You will likely be asked to upload a photo of your passport information page. 
- Ensure no glare is on the page.
- Ensure all four corners of the passport page are visible.
- Verification typically takes a few hours, but can take up to 24 hours. Do this before you fly!！！

**Step 5: How to Pay in Stores**
There are two ways to pay:
1. **You Scan Them:** Tap the "+" button > **Scan**. Point at the merchant's QR code. Enter the amount in RMB. Enter your 6-digit payment PIN.
2. **They Scan You:** Tap the "+" button > **Money**. A barcode/QR code appears. Show this to the cashier (common at convenience stores like 7-Eleven or large supermarkets). They zap it, and money is deducted automatically.

**Fees:**
- Transactions under 200 RMB are usually fee-free.
- Transactions over 200 RMB may incur a 3% transaction fee from WeChat.
    `,
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800", // 封面图 (Cover Image)
      // 其他图片可以放在这里，作为底部相册 (Gallery images)
      "https://images.unsplash.com/photo-1516747775616-64c910022216?auto=format&fit=crop&q=80&w=800" 
    ]
  },
  {
    id: 'q2',
    category: Category.INTERNET,
    question: "Do Google, Facebook, and Instagram work?",
    answer: "No, most Western social media and Google services are blocked by the Great Firewall. You need a VPN or eSIM.",
    details: `
**Understanding the Great Firewall**
China employs a vast internet filtering system known as the "Great Firewall". This blocks:
- **Google:** Gmail, Maps, Search, Drive, YouTube.
- **Meta:** Facebook, Instagram, WhatsApp.
- **Others:** X (Twitter), Slack, Wikipedia (variable), and many Western news sites.

**Solution 1: Travel eSIM (The Easiest Way)**
If you have an unlocked phone, buy an eSIM from providers like **Holafly**, **Airalo**, or **Nomad** before you go.
- **How it works:** These data plans route your traffic through servers in Hong Kong or Singapore.
- **Benefit:** You are technically "roaming", so the Great Firewall doesn't apply. Instagram and Google Maps work instantly without extra configuration.

**Solution 2: VPN (Virtual Private Network)**
If you plan to use hotel Wi-Fi, you must install a VPN app.
- **Warning:** Most free VPNs (and even many famous paid ones) do not work well in China.
- **Recommended:** Astrill VPN (expensive but reliable) or LetsVPN (popular locally).
- **Tip:** Install and sign up for the VPN *before* you board your plane. The app stores themselves are often blocked once you land.
    `
  },
  {
    id: 'q3',
    category: Category.ESSENTIALS,
    question: "Do I need a visa to visit China?",
    answer: "Most visitors need a visa, but the 144-hour visa-free transit policy is a great option for short layovers.",
    details: "Most travelers need to apply for a visa at a Chinese embassy/consulate. However, there are exceptions:\n\n**144-Hour Visa-Free Transit**\nAvailable to citizens of 54 countries (including US, UK, EU, Canada). You must be flying A -> China -> C (a third country). You cannot fly US -> China -> US. You can stay for 6 days in regions like Shanghai/Jiangsu/Zhejiang, Beijing/Tianjin/Hebei, or Guangdong.\n\n**Unilateral Visa-Free**\nRecently, China has granted 15-day visa-free entry to citizens of several countries including France, Germany, Italy, the Netherlands, Spain, and Malaysia. Check the latest Foreign Ministry announcements."
  },
  {
    id: 'q4',
    category: Category.TRANSPORT,
    question: "How do I buy high-speed train tickets?",
    answer: "Use Trip.com or the official Railway 12306 app. Booking opens 15 days in advance.",
    details: "China's high-speed rail network is efficient and often faster than flying for medium distances.\n\n**Buying Tickets:**\n- **Trip.com:** Easiest for foreigners. Small booking fee, but great English support.\n- **Railway 12306:** The official app. No fees, but the English version can be clunky. Requires account verification.\n\n**Boarding:**\nYou do not need a paper ticket. Your passport is your ticket. Go to the manual verification lane (often marked for Red/Manual check) as automatic gates only scan Chinese ID cards.",
    images: [
      "https://images.unsplash.com/photo-1505537552554-47c4b059f13c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'q5',
    category: Category.CULTURE,
    question: "Is tipping expected in restaurants?",
    answer: "No, tipping is not part of Chinese culture. The price on the menu is final.",
    details: "Tipping is **not** practiced in mainland China. It can even be considered offensive, implying the employer doesn't pay the staff enough. \n\n**Exceptions:**\n- High-end Western hotels may add a 10-15% service charge to the bill.\n- Tour guides and private drivers usually expect a tip given the customized service nature.",
    images: [
        "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'q6',
    category: Category.FOOD,
    question: "Is street food safe to eat?",
    answer: "Generally yes. Look for long lines of locals and freshly cooked hot food.",
    details: "Street food is the soul of Chinese cuisine! \n\n**Safety Tips:**\n- **Eat where locals eat:** High turnover means fresh ingredients.\n- **Cooked in front of you:** Wok-fried or boiled items are safest because high heat kills bacteria.\n- **Avoid raw:** Be careful with cut fruit or cold dishes sitting out.\n- **Water:** Never drink tap water. Always buy bottled water.",
    images: [
      "https://images.unsplash.com/photo-1562232816-7243c246f49d?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'q7',
    category: Category.TRANSPORT,
    question: "Do taxi drivers speak English?",
    answer: "Rarely. Use the Didi app (English interface) or have addresses written in Chinese.",
    details: "Don't expect taxi drivers to speak English. \n\n**Best Practice:**\n1. Download **Alipay** and use the **Didi** mini-app inside it. It has an English interface, auto-translates your chat with the driver, and handles payment automatically.\n2. If hailing a street taxi, show the driver the address in **Chinese characters** (Hanzi). Showing a map pin often doesn't work as drivers navigate by landmarks and written names."
  },
  {
    id: 'q8',
    category: Category.ESSENTIALS,
    question: "What apps must I download?",
    answer: "Alipay, WeChat, Trip.com, and a VPN/eSIM are the absolute essentials.",
    details: "**The China Survival Kit:**\n\n1. **Alipay:** The Swiss Army knife. Use it for payments, Metro QR codes, ride-hailing (Didi), and ordering food.\n2. **WeChat:** Essential for communication. Many restaurants also use it for ordering from the table.\n3. **Trip.com:** For booking trains and hotels friendly to foreigners.\n4. **Apple Maps:** Works great in China (unlike Google Maps). \n5. **Translation:** Baidu Translate or a translation app that works offline.",
    images: [
      "https://images.unsplash.com/photo-1627845347209-644917a419c8?auto=format&fit=crop&q=80&w=800"
    ]
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