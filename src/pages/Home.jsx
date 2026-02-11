import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Share,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Trophy,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

// Import lifestyle images from src/assets
import pokerImg from '@/assets/anymarket_lifestyle_poker_1770770406598.png';
import stadiumImg from '@/assets/anymarket_lifestyle_stadium_1770770419818.png';
import tvImg from '@/assets/anymarket_lifestyle_watching_tv_1770770433577.png';
import mockupImg from '@/assets/anymarket_v2_mockup_1_1770770323605.png';

const carouselItems = [
  { url: "/public-bet-example.png", title: "Global Markets", type: "App" },
  { url: pokerImg, title: "Social Stakes", type: "Lifestyle" },
  { url: "/private-bet-example.png", title: "Private Groups", type: "App" },
  { url: stadiumImg, title: "Live Events", type: "Lifestyle" },
  { url: tvImg, title: "Watch Parties", type: "Lifestyle" },
  { url: mockupImg, title: "Next Gen UI", type: "Lifestyle" },
];

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
      {/* Refined Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center text-sans">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-border/10">
              <img src="/icon.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold tracking-tighter text-lg">AnyMarket</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://anymarket.expo.app/" target="_blank" rel="noreferrer">
              <Button size="sm" className="rounded-full bg-primary text-white font-bold h-9">
                Open Web App
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Simplified Hero Hub */}
        <section className="max-w-4xl mx-auto px-6 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left mb-16">
            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-[2rem] overflow-hidden shadow-2xl shrink-0 border border-border/10">
              <img src="/icon.png" alt="AnyMarket" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col flex-1 gap-6">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter">Predict the future with Friends.</h1>
                <p className="text-muted-foreground text-lg sm:text-xl font-light">Social Prediction Market Platform</p>
              </div>
              
              {/* Platform Availability */}
              <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Web</span>
                  <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[11px] font-bold text-primary flex items-center gap-1.5">
                    Available Now <ArrowRight size={10} />
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1 opacity-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">iOS</span>
                  <div className="px-3 py-1 bg-secondary/20 border border-border/10 rounded-md text-[11px] font-bold text-muted-foreground">
                    Coming Soon
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1 opacity-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Android</span>
                  <div className="px-3 py-1 bg-secondary/20 border border-border/10 rounded-md text-[11px] font-bold text-muted-foreground">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Vision Section */}
          <div className="space-y-4 pt-8 border-t border-border/10">
            <h2 className="text-xl font-bold tracking-tight uppercase text-muted-foreground/40 text-[10px]">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Predicting the future shouldn't be lonely. We are building a social layer for global forecasting. Whether it's high-stakes geopolitics or office poker night, AnyMarket makes speculation fun, transparent, and cooperative. If it can be defined, it should be predictable.
            </p>
          </div>
        </section>

        {/* Unified Preview Carousel with Arrows */}
        <section className="py-12 bg-secondary/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <div className="flex justify-between items-end">
              <h2 className="text-xl font-bold tracking-tight">The Experience</h2>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full h-8 w-8 border border-border/20 bg-background/50 backdrop-blur"
                  onClick={() => scroll('left')}
                >
                  <ChevronLeft size={16} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full h-8 w-8 border border-border/20 bg-background/50 backdrop-blur"
                  onClick={() => scroll('right')}
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div 
                ref={scrollRef} 
                className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4 -mx-6 px-6 sm:mx-0 sm:px-0"
              >
                {carouselItems.map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-[220px] sm:w-[280px] aspect-[9/16] rounded-3xl overflow-hidden border border-border/10 snap-center shadow-2xl relative bg-black group/item">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">{item.type}</span>
                      <h3 className="text-white text-base font-bold leading-tight">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Feature Grid (No Redundancy) */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: MessageSquare, title: "Social First", desc: "Every market is a conversation. Shared research, heated debates, and friend-group rivalries." },
              { icon: Shield, title: "Verified Record", desc: "Build your reputation as a forecaster. Your track record is public and immutable." },
              { icon: Zap, title: "Pure Performance", desc: "Sub-second updates and bank-grade security for a seamless, professional experience." }
            ].map((f, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <f.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="border-none bg-secondary/20 rounded-[3rem] overflow-hidden">
              <CardContent className="p-10 sm:p-16 flex flex-col items-center text-center gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Apple Vision Pro 2 <br /> launched by Q4 2026?</h3>
                  <div className="flex gap-4 justify-center items-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <span>Pool: 85.2K 🟪</span>
                    <span className="flex items-center gap-1.5 text-green-500 font-bold"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> LIVE</span>
                  </div>
                </div>

                <div className="flex gap-4 w-full max-w-sm">
                  <Button 
                    onClick={() => setPrediction('YES')}
                    className={`flex-1 h-14 rounded-2xl font-bold text-lg transition-all ${prediction === 'YES' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-background hover:bg-background/80'}`}
                  >
                    YES
                  </Button>
                  <Button 
                    onClick={() => setPrediction('NO')}
                    className={`flex-1 h-14 rounded-2xl font-bold text-lg transition-all ${prediction === 'NO' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-background hover:bg-background/80'}`}
                  >
                    NO
                  </Button>
                </div>

                <AnimatePresence>
                  {prediction && (
                    <Motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-1">
                      <p className="text-primary font-bold">Predicted {prediction} successfully.</p>
                      <p className="text-xs text-muted-foreground font-light italic">Connecting to wallet...</p>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 max-w-4xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Join the Network.</h2>
            <p className="text-muted-foreground text-xl font-light">Start creating and predicting with your people today.</p>
          </div>
          <a href="https://anymarket.expo.app/" target="_blank" rel="noreferrer" className="inline-block">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-primary text-white font-bold shadow-2xl hover:scale-105 transition-all">
              Launch AnyMarket Web App
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
}
