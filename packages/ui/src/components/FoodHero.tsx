import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface FoodHeroProps {
  onExploreMenu: () => void;
  onOurStory: () => void;
}

export const FoodHero: React.FC<FoodHeroProps> = ({ onExploreMenu, onOurStory }) => {
  return (
    <section 
      style={{
        background: 'radial-gradient(circle at 70% 50%, rgba(147, 0, 10, 0.15) 0%, rgba(19, 19, 19, 1) 70%)'
      }}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 overflow-hidden"
    >
      
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 items-center gap-gutter-md relative z-10 w-full max-w-container-max">
        
        {/* Left Side Content */}
        <div className="col-span-12 lg:col-span-6 text-center lg:text-left space-y-6 pt-8 lg:pt-0">
          <span className="font-body text-xs md:text-sm text-[#ffb68b] tracking-[0.3em] uppercase block">
            Elevated Fast Food
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-black text-white flex flex-col tracking-tighter">
            <span>PIZZA <span className="text-[#ffb68b]">&amp;</span></span>
            <span className="text-glow text-gradient bg-gradient-to-r from-white to-[#ffb68b] bg-clip-text text-transparent">
              BURGER
            </span>
          </h1>
          <p className="font-body text-base md:text-lg text-[#e0c0af] max-w-lg mx-auto lg:mx-0 pt-4 leading-relaxed">
            Experience the intersection of speed and luxury. We curate high-gloss flavors using globally sourced ingredients for the modern palate.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
            <Button variant="gloss" onClick={onExploreMenu}>
              Explore Menu 
              <ArrowRight size={18} strokeWidth={2.5} />
            </Button>
            <Button variant="outline" onClick={onOurStory}>
              Our Story
            </Button>
          </div>
        </div>

        {/* Right Side Montage (Burger + Pizza overlapping) */}
        <div className="col-span-12 lg:col-span-6 relative h-[380px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0 flex items-center justify-center">
          <div className="absolute w-full h-full flex items-center justify-center">
            {/* Background Pizza */}
            <img 
              alt="Artisan Wood-Fired Pizza" 
              className="absolute w-[60%] sm:w-[50%] lg:w-[70%] h-auto z-10 bottom-4 right-4 sm:right-8 translate-x-1/8 drop-shadow-[0_20px_40px_rgba(147,0,10,0.4)] rotate-[12deg] opacity-75 pointer-events-none" 
              src="/images/placeholders/hero-pizza.svg"
            />
            {/* Foreground Burger */}
            <img 
              alt="Luxury Wagyu Burger" 
              className="absolute w-[70%] sm:w-[60%] lg:w-[80%] h-auto z-20 drop-shadow-[0_30px_60px_rgba(255,182,139,0.35)] rotate-[-6deg] hover:rotate-0 transition-transform duration-700 cursor-grab active:cursor-grabbing" 
              src="/images/placeholders/hero-burger.svg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
