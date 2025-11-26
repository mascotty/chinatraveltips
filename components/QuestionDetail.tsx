import React, { useEffect } from 'react';
import { QuestionCardData } from '../types';
import { CATEGORY_COLORS } from '../constants';
import { ArrowLeft, Share2, Printer } from 'lucide-react';

interface QuestionDetailProps {
  data: QuestionCardData;
  onBack: () => void;
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({ data, onBack }) => {
  // Scroll to top when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use 'details' if available, otherwise fallback to 'answer'
  const content = data.details || data.answer;

  // Simple markdown-like parser
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmedLine = line.trim();

      // 1. Check for Image Syntax: ![Caption](URL)
      // This allows inserting images between paragraphs
      const imageMatch = trimmedLine.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        const [_, alt, src] = imageMatch;
        return (
          <figure key={i} className="my-8">
            <img 
              src={src} 
              alt={alt} 
              className="w-full rounded-xl shadow-md border border-stone-100" 
            />
            {alt && <figcaption className="text-center text-sm text-stone-500 mt-2 italic">{alt}</figcaption>}
          </figure>
        );
      }

      // 2. Check for Bold Text: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="text-stone-900 font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      // 3. Check for List Items: - item
      const isListItem = trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\./);
      const className = isListItem 
        ? "pl-4 mb-2" 
        : `mb-4 ${trimmedLine === '' ? 'h-4' : ''}`;

      return (
        <p key={i} className={`leading-relaxed ${className}`}>
          {renderedLine}
        </p>
      );
    });
  };

  // The first image in the array is treated as the Cover Image
  const coverImage = data.images && data.images.length > 0 ? data.images[0] : null;
  // Remaining images can be shown in a gallery at the bottom if needed
  const galleryImages = data.images && data.images.length > 1 ? data.images.slice(1) : [];

  return (
    <div className="min-h-screen animate-fade-in pb-20 bg-stone-50">
      {/* Sticky Back Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stone-600 hover:text-red-800 transition-colors font-medium group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Guide</span>
          </button>
          <div className="flex gap-4 text-stone-400">
            <button className="hover:text-stone-800 transition-colors"><Printer size={20} /></button>
            <button className="hover:text-stone-800 transition-colors"><Share2 size={20} /></button>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 mt-8 md:mt-12">
        {/* Header Section */}
        <header className="mb-8 md:mb-12 text-center md:text-left">
          <span className={`inline-block px-4 py-1.5 text-sm font-bold tracking-wider uppercase rounded-full mb-6 ${CATEGORY_COLORS[data.category]}`}>
            {data.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-chinese font-bold text-stone-900 leading-tight mb-6">
            {data.question}
          </h1>
          <div className="h-1 w-20 bg-red-800 mx-auto md:mx-0 rounded-full opacity-20"></div>
        </header>

        {/* Cover Image (First Image) */}
        {coverImage && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-stone-100 aspect-[21/9]">
            <img 
              src={coverImage} 
              alt={`Cover for ${data.question}`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Main Content Body */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-stone-100 text-lg text-stone-700 font-serif">
          {renderContent(content)}
        </div>

        {/* Bottom Gallery (Remaining Images) */}
        {galleryImages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold font-chinese mb-4 text-stone-800">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-video">
                   <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Gallery" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Call to Action */}
        <div className="mt-12 bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-red-900 mb-2 font-chinese">Explore More</h3>
          <p className="text-red-800/70 mb-6">Check out other travel guides to plan your perfect trip.</p>
          <button 
             onClick={onBack}
             className="bg-red-800 text-white px-8 py-3 rounded-xl font-medium hover:bg-red-900 transition-all shadow-md hover:shadow-lg"
          >
            Explore More Topics
          </button>
        </div>
      </article>
    </div>
  );
};

export default QuestionDetail;