import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

const CATEGORIES: Category[] = [
  {
    id: 'burgers',
    name: 'Prime Burgers',
    description: 'Wagyu, Truffle, & Gold-leaf selections.',
    image: '/images/placeholders/burger.svg'
  },
  {
    id: 'pizza',
    name: 'Artisan Pizza',
    description: '72-hour fermented sourdough crust.',
    image: '/images/placeholders/pizza.svg'
  },
  {
    id: 'sides',
    name: 'Signature Sides',
    description: 'Truffle frites & charred seasonal greens.',
    image: '/images/placeholders/sides.svg'
  },
  {
    id: 'drinks',
    name: 'Lumina Elixirs',
    description: 'Crafted botanical infusions & cold brews.',
    image: '/images/placeholders/drinks.svg'
  }
];

interface CategoryCardsProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full">
      {/* Category Container: Horizontal Scroll on Mobile/Tablet, 4-column Grid on Desktop */}
      <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none gap-6 pb-6 md:pb-0 px-margin-mobile md:px-0">
        
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <div 
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`snap-center shrink-0 w-[280px] sm:w-[320px] md:w-auto relative aspect-[4/3] rounded-[28px] overflow-hidden group cursor-pointer border transition-all duration-500 ${
                isActive 
                  ? 'border-[#ffb68b] shadow-[0_15px_30px_rgba(255,182,139,0.2)] scale-[1.02]' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.4]" 
                  src={category.image}
                />
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80" />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/10 via-transparent to-transparent opacity-40" />
                )}
              </div>

              {/* Card Label/Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#ffb68b] transition-colors">
                    {category.name}
                  </h3>
                  <p className="font-body text-xs text-[#e0c0af] max-w-[200px] line-clamp-1">
                    {category.description}
                  </p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#ff7a00] border-[#ff7a00] text-[#522300]' 
                    : 'border-white/20 bg-white/5 text-white group-hover:bg-white/10 group-hover:border-white/40'
                }`}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};
