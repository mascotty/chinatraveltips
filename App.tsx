import React, { useState, useMemo } from 'react';
import { Category, QuestionCardData } from './types';
import { INITIAL_QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';
import AskGemini from './components/AskGemini';
import { Compass, Menu, Search, X } from 'lucide-react';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionCardData[]>(INITIAL_QUESTIONS);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle new question from AI
  const handleNewQuestion = (newQuestion: QuestionCardData) => {
    setQuestions(prev => [newQuestion, ...prev]);
    // Optionally switch view to show the new question
    setSelectedCategory('All');
    setSearchQuery(''); 
  };

  // Filter logic
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
      const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            q.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [questions, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-red-200 selection:text-red-900 flex flex-col">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-pattern z-0"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => {setSelectedCategory('All'); window.scrollTo(0,0);}}>
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

          {/* AI Search Bar */}
          <AskGemini onNewQuestion={handleNewQuestion} />
        </section>

        {/* Filters & Content */}
        <div className="mt-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['All', ...Object.values(Category)].map((cat) => (
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

          {/* Search Local Filter */}
          <div className="max-w-md mx-auto mb-12 relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400 group-focus-within:text-red-700 transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Filter existing questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-red-100 focus:border-red-300 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Questions Grid */}
          {filteredQuestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-20">
              {filteredQuestions.map(q => (
                <QuestionCard key={q.id} data={q} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
              <div className="text-6xl mb-4">🏮</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">No answers found</h3>
              <p className="text-stone-500">Try asking our AI guide above!</p>
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
              Built with React, Tailwind & Gemini.
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
