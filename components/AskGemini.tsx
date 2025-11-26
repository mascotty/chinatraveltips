import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { askTravelQuestion } from '../services/geminiService';
import { QuestionCardData, Category } from '../types';

interface AskGeminiProps {
  onNewQuestion: (question: QuestionCardData) => void;
}

const AskGemini: React.FC<AskGeminiProps> = ({ onNewQuestion }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const answer = await askTravelQuestion(input);
      const newCard: QuestionCardData = {
        id: Date.now().toString(),
        category: Category.AI_GENERATED,
        question: input,
        answer: answer,
        isExpanded: true,
      };
      onNewQuestion(newCard);
      setInput('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-12 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-2 flex items-center gap-2">
        <div className="pl-4 text-red-700 animate-pulse">
          <Sparkles size={24} />
        </div>
        <form onSubmit={handleSubmit} className="flex-1 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything (e.g., 'Is tap water safe?')"
            className="w-full p-4 text-lg text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={`
              p-3 rounded-xl m-1 transition-all duration-300
              ${isLoading || !input.trim() 
                ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
                : 'bg-red-800 text-white hover:bg-red-900 shadow-md transform hover:scale-105'}
            `}
          >
            {isLoading ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
          </button>
        </form>
      </div>
      <p className="text-center text-stone-500 text-sm mt-3 font-medium">
        Powered by Google Gemini • Instant answers for your China trip
      </p>
    </div>
  );
};

export default AskGemini;
