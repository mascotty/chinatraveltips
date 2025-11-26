import React from 'react';
import { QuestionCardData } from '../types';
import { CATEGORY_COLORS } from '../constants';
import { ArrowRight, ImageIcon } from 'lucide-react';

interface QuestionCardProps {
  data: QuestionCardData;
  onClick: (data: QuestionCardData) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ data, onClick }) => {
  return (
    <div 
      onClick={() => onClick(data)}
      className="relative group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      {/* Category Stripe */}
      <div className={`h-1 w-full ${data.category === 'AI Response' ? 'bg-stone-400' : 'bg-red-800'}`} />

      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${CATEGORY_COLORS[data.category]}`}>
            {data.category}
          </span>
          {data.images && data.images.length > 0 && (
             <ImageIcon size={16} className="text-stone-400" />
          )}
        </div>

        {/* Question */}
        <h3 className="text-xl font-chinese font-bold text-stone-900 leading-tight mb-3">
          {data.question}
        </h3>

        {/* Preview Answer */}
        <p className="text-stone-500 text-sm line-clamp-3 mb-6 flex-grow">
          {data.answer}
        </p>

        {/* Footer Action */}
        <div className="flex items-center text-red-800 font-medium text-sm group-hover:underline decoration-red-800/30 underline-offset-4 transition-all">
          Read Guide <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
      
      {/* Decorative Texture */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
    </div>
  );
};

export default QuestionCard;