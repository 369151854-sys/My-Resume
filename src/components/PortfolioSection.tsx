import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<'work' | 'student' | null>(null);

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-[#f5f2ed] py-20 relative overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-8 md:px-24 h-full flex flex-col flex-1 w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-serif">作品集</h2>
          <p className="text-zinc-400 uppercase tracking-widest text-sm mt-2">Selected Works</p>
        </div>

        <AnimatePresence mode="wait">
          {!activeCategory ? (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <CategoryCard 
                title="工作时期" 
                subtitle="2020 - 2025" 
                image="https://picsum.photos/seed/work/800/1000"
                onClick={() => setActiveCategory('work')} 
              />
              <CategoryCard 
                title="学生时期" 
                subtitle="2018 - 2020" 
                image="https://picsum.photos/seed/student/800/1000"
                onClick={() => setActiveCategory('student')} 
              />
            </motion.div>
          ) : (
            <motion.div 
              key="slider"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col"
            >
              <div className="p-6 flex justify-between items-center z-50 absolute top-0 left-0 right-0">
                <h3 className="text-xl font-serif">{activeCategory === 'work' ? '工作时期' : '学生时期'}</h3>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <PPTSlider items={portfolioData[activeCategory]} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function CategoryCard({ title, subtitle, image, onClick }: { title: string, subtitle: string, image: string, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group relative aspect-[3/4] md:aspect-square overflow-hidden cursor-pointer rounded-2xl"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h3 className="text-4xl font-serif mb-2">{title}</h3>
        <p className="text-sm tracking-widest uppercase opacity-80">{subtitle}</p>
        <div className="mt-8 w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-500" />
      </div>
    </div>
  );
}

function PPTSlider({ items }: { items: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % items.length); setShowDetails(false); };
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + items.length) % items.length); setShowDetails(false); };

  return (
    <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-black" onClick={() => setShowDetails(!showDetails)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="w-full h-full relative">
            <img 
              src={items[currentIndex].image} 
              alt={items[currentIndex].title}
              className="w-full h-full object-contain md:object-cover"
            />
            
            {/* Transparent mask with text */}
            <AnimatePresence>
              {showDetails && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-end p-8 md:p-24"
                >
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <div className="flex items-center gap-4 mb-4 text-sm tracking-widest text-zinc-300">
                      <span>{items[currentIndex].year}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-500" />
                      <span>{items[currentIndex].location}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                      {items[currentIndex].title}
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      {items[currentIndex].description}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {items.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10" onClick={e => e.stopPropagation()}>
            {items.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => { setCurrentIndex(idx); setShowDetails(false); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/30'}`}
              />
            ))}
          </div>
          
          {/* Hint text */}
          {!showDetails && (
            <div className="absolute top-24 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase animate-pulse pointer-events-none z-10">
              Click to view details
            </div>
          )}
        </>
      )}
    </div>
  );
}
