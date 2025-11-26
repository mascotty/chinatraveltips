import React, { useState } from 'react';
import { QuestionCardData, Category } from '../types';
import { CATEGORY_COLORS } from '../constants';
import { ChevronDown, ChevronUp, Share2 } from 'lucide-react';

interface QuestionCardProps {
  data: QuestionCardData;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Parse markdown-like bolding for simple display
  const renderAnswer = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-red-900 font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div 
      className={`
        relative group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md
        ${isOpen ? 'ring-2 ring-red-100' : ''}
      `}
    >
      {/* Decorative top bar */}
      <div className={`h-1 w-full ${data.category === Category.AI_GENERATED ? 'bg-gradient-to-r from-stone-400 to-stone-600' : 'bg-red-800'}`} />

      <button 
        onClick={toggleOpen}
        className="w-full text-left p-6 focus:outline-none"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-3">
            <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${CATEGORY_COLORS[data.category]}`}>
              {data.category}
            </span>
            <h3 className="text-xl font-chinese font-bold text-stone-900 leading-tight">
              {data.question}
            </h3>
          </div>
          <div className="text-stone-400 flex-shrink-0 mt-1">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </button>

      <div 
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-stone-700 leading-relaxed border-t border-stone-100 pt-4 font-sans text-lg">
          {renderAnswer(data.answer)}
        </div>
        
        <div className="mt-4 flex justify-end">
           <button className="text-stone-400 hover:text-red-700 transition-colors flex items-center gap-1 text-sm">
             <Share2 size={14} /> Share
           </button>
        </div>
      </div>
      
      {/* Subtle corner texture */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
    </div>
  );
};

export default QuestionCard;
