import React, { useState, useMemo } from 'react';
import { Category, QuestionCardData } from './types';
import { INITIAL_QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';
import QuestionDetail from './components/QuestionDetail';
import { Compass, Menu, Search, X } from 'lucide-react';

const App: React.FC = () => {
  const [questions] = useState<QuestionCardData[]>(INITIAL_QUESTIONS);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionCardData | null>(null);

  // Filter logic
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
      const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            q.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [questions, selectedCategory, searchQuery]);

  const handleBackToHome = () => {
    setSelectedQuestion(null);
  };

  // If a question is selected, show the detail view
  if (selectedQuestion) {
    return <QuestionDetail data={selectedQuestion} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-red-200 selection:text-red-900 flex flex-col">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-pattern z-0"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => {
                setSelectedCategory('All'); 
                setSearchQuery('');
                window.scrollTo(0,0);
              }}
            >
              <div className="bg-red-800 text-white p-2 rounded-lg">
                <Compass size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-2xl font-chinese font-bold tracking-tight text-stone-900">Bamboo Compass</h1>
                <p className="text-xs text-stone-500 uppercase tracking-widest hidden sm:block">China Travel Guide</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-stone-600 hover:text-red-800 font-medium transition-colors">Destinations</a>
              <a href="#" className="text-stone-600 hover:text-red-800 font-medium transition-colors">Guide</a>
              <button className="bg-stone-900 text-white px-5 py-2 rounded-full font-medium hover:bg-red-800 transition-colors">
                Plan Trip
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-stone-600">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20 relative">
          {/* Subtle decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-red-800 opacity-20 rounded-full"></div>
          
          <h2 className="text-4xl md:text-6xl font-chinese font-bold text-stone-900 mb-6 leading-tight">
            Discover the Middle Kingdom <br/>
            <span className="text-red-800 italic">Without Confusion</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            From seamless payments to navigating the Great Firewall. 
            We've collected the essential wisdom for your journey East.
          </p>

          {/* Styled Search/Filter Bar (Replaces AskGemini) */}
          <div className="w-full max-w-2xl mx-auto my-12 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-2 flex items-center gap-2 transition-shadow hover:shadow-2xl">
              <div className="pl-4 text-red-800">
                <Search size={24} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guide (e.g. 'WeChat', 'Train', 'Visa')..."
                className="flex-1 p-4 text-lg text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-3 mr-1 text-stone-400 hover:text-red-800 hover:bg-stone-100 rounded-xl transition-all"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            <p className="text-center text-stone-500 text-sm mt-3 font-medium">
               Search through {questions.length} curated travel tips
            </p>
          </div>
        </section>

        {/* Filters & Content */}
        <div className="mt-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', ...Object.values(Category)].filter(c => c !== Category.AI_GENERATED).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as Category | 'All')}
                className={`
                  px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border
                  ${selectedCategory === cat 
                    ? 'bg-stone-900 text-white border-stone-900 shadow-lg transform scale-105' 
                    : 'bg-white text-stone-500 border-stone-200 hover:border-red-300 hover:text-red-700'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Questions Grid */}
          {filteredQuestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-20">
              {filteredQuestions.map(q => (
                <QuestionCard 
                  key={q.id} 
                  data={q} 
                  onClick={setSelectedQuestion} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
              <div className="text-6xl mb-4">🏮</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">No answers found</h3>
              <p className="text-stone-500">Try a different keyword.</p>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Compass size={24} />
              <span className="font-chinese text-xl font-bold">Bamboo Compass</span>
            </div>
            <p className="text-sm opacity-60">
              Simplifying travel to China for everyone. <br/>
              Built with React & Tailwind.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Visa Policy</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Payment Guide</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Top Destinations</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Emergency Numbers</h4>
             <ul className="space-y-2 text-sm">
               <li className="flex justify-between"><span>Police</span> <span className="text-white font-mono">110</span></li>
               <li className="flex justify-between"><span>Ambulance</span> <span className="text-white font-mono">120</span></li>
               <li className="flex justify-between"><span>Fire</span> <span className="text-white font-mono">119</span></li>
             </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-xs opacity-40 border-t border-stone-800 pt-8">
          © {new Date().getFullYear()} Bamboo Compass. All rights reserved. Images by Unsplash/Picsum.
        </div>
      </footer>

    </div>
  );
};

export default App;