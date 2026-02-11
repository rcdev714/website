import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import {
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Loader2
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
  const [isPredicting, setIsPredicting] = useState(false);
  const scrollRef = useRef(null);

  const handlePredict = (type) => {
    setIsPredicting(true);
    setPrediction(null);
    setTimeout(() => {
      setIsPredicting(false);
      setPrediction(type);
    }, 800);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20 selection:bg-primary/30">
      <main className="pt-2">
        {/* Simplified Hero Hub */}
        <section className="max-w-4xl mx-auto px-6 py-8 sm:py-16">
          <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start text-center sm:text-left mb-20">
            <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-[2.5rem] liquid-panel overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] shrink-0 p-1 flex items-center justify-center">
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative group">
                <img src="/icon.png" alt="AnyMarket Logo - Unified Social Prediction Market and Forecasting Platform" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-8 justify-center py-2 h-full">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-semibold tracking-tighter shiny-text leading-tight">Predict the future <br />with Friends.</h1>
                <p className="text-muted-foreground text-lg sm:text-xl font-light tracking-tight max-w-lg">Social Prediction Market Platform for modern communities.</p>
              </div>

              {/* Platform Availability */}
              <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">Web</span>
                  <a href="https://anymarket.expo.app/" target="_blank" rel="noreferrer">
                    <div className="px-5 py-2 liquid-button bg-primary text-white rounded-full text-[12px] font-semibold flex items-center gap-2 group cursor-pointer active:scale-95 transition-all">
                      Available Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2 opacity-40">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">iOS</span>
                  <div className="px-5 py-2 liquid-panel rounded-full text-[12px] font-semibold text-muted-foreground border border-white/5">
                    Coming Soon
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2 opacity-40">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Android</span>
                  <div className="px-5 py-2 liquid-panel rounded-full text-[12px] font-semibold text-muted-foreground border border-white/5">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Vision Section */}
          <div className="space-y-4 pt-8 border-t border-border/10">
            <h2 className="text-xl font-semibold tracking-tight uppercase text-muted-foreground/40 text-[10px]">Our Vision</h2>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed font-light">
              Predicting the future shouldn't be lonely. We are building a social layer for global forecasting. Whether it's high-stakes geopolitics or office poker night, AnyMarket makes speculation fun, transparent, and cooperative. If it can be defined, it should be predictable.
            </p>
          </div>
        </section>

        {/* Unified Preview Carousel with Arrows */}
        <section className="py-16 bg-secondary/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-semibold tracking-tight shiny-text">The Experience</h2>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 border border-white/10 bg-white/5 backdrop-blur-xl liquid-button"
                  onClick={() => scroll('left')}
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 border border-white/10 bg-white/5 backdrop-blur-xl liquid-button"
                  onClick={() => scroll('right')}
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                ref={scrollRef}
                className="flex gap-6 sm:gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4 -mx-6 px-6 sm:mx-0 sm:px-0"
              >
                {carouselItems.map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-[260px] sm:w-[340px] aspect-[9/16] rounded-[3rem] overflow-hidden liquid-panel snap-center shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative group/item border border-white/10">
                    <img 
                      src={item.url} 
                      alt={`AnyMarket ${item.title} - ${item.type} view showcasing social prediction features`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.3em] mb-2 block">{item.type}</span>
                      <h3 className="text-white text-xl font-semibold leading-tight">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid with Liquid Deep Depth */}
        <section className="py-32 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-20">
            {[
              { icon: MessageSquare, title: "Social First", desc: "Every market is a conversation. Shared research, heated debates, and friend-group rivalries." },
              { icon: Shield, title: "Verified Record", desc: "Build your reputation as a forecaster. Your track record is public and immutable." },
              { icon: Zap, title: "Pure Performance", desc: "Sub-second updates and bank-grade security for a seamless, professional experience." }
            ].map((f, i) => (
              <div key={i} className="space-y-6 group cursor-default">
                <div className="w-16 h-16 liquid-panel rounded-[1.5rem] flex items-center justify-center text-primary shadow-lg transition-all group-hover:scale-110 group-hover:shadow-primary/20">
                  <f.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight shiny-text">{f.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-lg">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Section - Asymmetric Realistic Style */}
        <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="liquid-panel rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <CardContent className="p-12 sm:p-20 flex flex-col items-center text-center gap-12 relative z-10">
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-5xl font-semibold tracking-tighter shiny-text leading-none">Apple Vision Pro 2 <br /> launched by Q4 2026?</h3>
                  <div className="flex gap-6 justify-center items-center text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.3em]">
                    <span className="px-4 py-1.5 liquid-panel rounded-full border-white/10">Pool: 120K �</span>
                    <span className="flex items-center gap-2 text-green-500 font-semibold">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
                      LIVE
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-8 w-full max-w-sm">
                  <div className="flex gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                      <Button
                        disabled={isPredicting}
                        onClick={() => handlePredict('YES')}
                        className={`w-full h-16 rounded-[1.75rem] font-semibold text-xl liquid-button transition-all z-20 ${prediction === 'YES' ? 'bg-primary text-white shadow-[0_10px_30px_rgba(0,122,255,0.4)] scale-105 border-primary/50' : 'bg-white/5 border-white/10 opacity-80'}`}
                      >
                        {isPredicting && prediction === null ? <Loader2 className="animate-spin" /> : "YES"}
                      </Button>
                      <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Price: 20¢</span>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <Button
                        disabled={isPredicting}
                        onClick={() => handlePredict('NO')}
                        className={`w-full h-16 rounded-[1.75rem] font-semibold text-xl liquid-button transition-all z-20 ${prediction === 'NO' ? 'bg-primary text-white shadow-[0_10px_30px_rgba(0,122,255,0.4)] scale-105 border-primary/50' : 'bg-white/5 border-white/10 opacity-80'}`}
                      >
                        {isPredicting && prediction === null ? <Loader2 className="animate-spin" /> : "NO"}
                      </Button>
                      <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Price: 80¢</span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {isPredicting && (
                      <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <p className="text-xs text-muted-foreground font-light italic animate-pulse">Calculating pari-mutuel yield...</p>
                      </Motion.div>
                    )}
                    {prediction && !isPredicting && (
                      <Motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="space-y-3 pt-4 border-t border-white/5 w-full bg-gradient-to-b from-primary/5 to-transparent rounded-3xl p-6"
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-green-400 text-5xl font-semibold tracking-tight">
                            {prediction === 'YES' ? '+$400.00' : '+$25.00'}
                          </span>
                          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mt-2">Potential Profit</p>
                        </div>
                        <p className="text-primary/60 text-[10px] font-medium uppercase tracking-widest">
                          {prediction === 'YES' ? 'Order: $100.00 @ 20¢' : 'Order: $100.00 @ 80¢'}
                        </p>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter shiny-text">Join the Network.</h2>
            <p className="text-muted-foreground text-xl font-light">Start creating and predicting with your people today.</p>
          </div>
          <a href="https://anymarket.expo.app/" target="_blank" rel="noreferrer" className="inline-block">
            <Button size="lg" className="h-16 px-14 text-xl rounded-full bg-primary text-white font-semibold shadow-[0_15px_40px_rgba(0,122,255,0.4)] hover:scale-105 transition-all liquid-button">
              Launch AnyMarket Hub
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
}
