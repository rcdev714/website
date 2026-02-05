import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Shield, 
  Trophy, 
  MessageSquare, 
  Zap,
  Globe,
  Settings,
  CheckCircle2
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [prediction, setPrediction] = useState(null);

  const checkoutDetails = {
    bet: "100.00",
    win: "468.20",
    profit: "368.20",
    fee: "92.05%"
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)] overflow-x-hidden">
      {/* Hero Section */}
      <section 
        aria-labelledby="hero-heading"
        className="relative flex flex-col items-center justify-center pt-12 pb-8 px-6 text-center md:pt-24 md:pb-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none opacity-20" />

        <Motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="container relative z-10 space-y-8"
        >
          <Motion.div variants={fadeInUp} className="flex flex-col items-center space-y-8">
            <div className="w-24 h-24 rounded-3xl border border-white/10 p-4 bg-white/5 flex items-center justify-center">
              <img src="/icon.png" alt="AnyMarket Logo" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-extralight tracking-tighter text-white">
                AnyMarket
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/60 tracking-tight">
                Predict everything with friends
              </p>
            </div>
          </Motion.div>
          
          <Motion.div variants={fadeInUp} className="flex flex-col gap-6 justify-center items-center sm:flex-row pt-8">
            <a href="https://anymarket.expo.app/" target="_blank" rel="noreferrer" aria-label="Open AnyMarket Web App">
              <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-black hover:bg-white/90 shadow-xl transition-all hover:scale-[1.02] active:scale-95 group font-medium border-none">
                Launch App <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          
          </Motion.div>
        </Motion.div>
      </section>

      <section className="py-8 border-b border-white/5">
        <div className="container px-4 space-y-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Public Market Example */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/60">Global Markets</span>
                <h3 className="text-2xl font-light text-white">Predict the World Cup</h3>
              </div>
              <Motion.div 
                whileHover={{ scale: 1.01 }}
                className="w-full max-w-[320px] h-[600px] rounded-[2rem] border border-white/10 bg-white/5 flex items-center justify-center relative group"
              >
                <img src="/public-bet-example.png" alt="World Cup Prediction" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity p-4" />
                <div className="absolute top-4 right-4 px-3 py-1 border border-white/20 rounded-full text-[9px] font-medium tracking-widest text-white uppercase">Public</div>
              </Motion.div>
              <p className="text-muted-foreground font-light leading-relaxed text-sm max-w-sm">Join thousands in predicting the biggest sporting events on earth. Track global sentiment and lock in your stake.</p>
            </div>

            {/* Private Market Example */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/60">Community Spaces</span>
                <h3 className="text-2xl font-light text-white">Office UFC Rivalries</h3>
              </div>
              <Motion.div 
                whileHover={{ scale: 1.01 }}
                className="w-full max-w-[320px] h-[600px] rounded-[2rem] border border-white/10 bg-white/5 flex items-center justify-center relative group"
              >
                <img src="/private-bet-example.png" alt="Office UFC Prediction" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity p-4" />
                <div className="absolute top-4 right-4 px-3 py-1 border border-white/20 rounded-full text-[9px] font-medium tracking-widest text-white uppercase">Private</div>
              </Motion.div>
              <p className="text-muted-foreground font-light leading-relaxed text-sm max-w-sm">Create private group chats for your inner circle. Bet on the next fight night or office games with custom markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl font-extralight tracking-tighter text-white leading-tight">Anything Goes.</h2>
              <p className="text-muted-foreground text-2xl leading-[1.6] font-light opacity-90 max-w-xl">
                Create group chats with friend and bet on outcomes? who wins the ofice blackjack? Movie outcome? Or Global Geopolitics, anything goes. 
                <span className="text-white/60 block mt-4 font-normal">If it can be defined, it can be predicted.</span>
              </p>
            </div>

            <div className="space-y-12">
              {[
                { icon: MessageSquare, title: "Contextual Discussions", desc: "Every prediction market has its own space for research sharing and debate." },
                { icon: Shield, title: "Verified Reputation", desc: "Your accuracy is your passport. Build a track record that matters." },
                { icon: Zap, title: "Real-Time Volatility", desc: "Experience the pulse of the crowd with sub-second probability updates." }
              ].map((item, idx) => (
                <Motion.div 
                  key={idx} 
                  whileHover={{ x: 10 }}
                  className="flex gap-8 group cursor-default"
                >
                  <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/60 transition-all group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2 text-white/90">{item.title}</h4>
                    <p className="text-muted-foreground text-lg font-light opacity-60 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          <Motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="relative border-white/10 overflow-hidden bg-white/5 rounded-[3rem] p-2 transition-all min-h-[500px] flex flex-col justify-center ring-1 ring-white/5 shadow-none">
              <div className="p-10 space-y-10">
                <div className="space-y-3 text-center">
                  <h3 className="text-2xl font-light text-white/80 tracking-widest uppercase">Live Interactive Demo</h3>
                  <div className="h-[1px] w-12 bg-primary/20 mx-auto" />
                </div>
                
                <div className="space-y-6 w-full max-w-sm mx-auto">
                   <Motion.div 
                    layout
                    className="p-8 bg-background/40 border border-white/5 rounded-[2.5rem] space-y-8 relative overflow-hidden"
                   >
                      <div className="space-y-4">
                        <p className="font-light text-2xl text-white text-center leading-snug">Apple Vision Pro 2 <br /> launched by Q4 2026?</p>
                        <div className="flex justify-between items-center text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase opacity-60">
                          <span>POOL: 85,200 🟪</span>
                          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> LIVE</span>
                        </div>
                      </div>

                      <div className="flex gap-4 relative z-10">
                        <Button 
                          onClick={() => setPrediction('YES')}
                          className={`flex-1 h-14 rounded-2xl transition-all ${prediction === 'YES' ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                          YES (42%)
                        </Button>
                        <Button 
                          onClick={() => setPrediction('NO')}
                          variant="outline" 
                          className={`flex-1 h-14 rounded-2xl transition-all ${prediction === 'NO' ? 'border-white bg-white/10 text-white' : 'border-white/10 text-white/80 hover:bg-white/5'}`}
                        >
                          NO (58%)
                        </Button>
                      </div>

                      <AnimatePresence mode="wait">
                        {prediction && (
                          <Motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-6 border-t border-white/10 space-y-4"
                          >
                            <div className="flex justify-between text-sm font-light">
                              <span className="text-muted-foreground">Your Bet</span>
                              <span className="text-white">${checkoutDetails.bet}</span>
                            </div>
                            <div className="flex justify-between text-sm font-light">
                              <span className="text-muted-foreground">If You Win, You Get Back</span>
                              <span className="text-white">${checkoutDetails.win}</span>
                            </div>
                            <div className="flex justify-between text-lg font-medium pt-2">
                              <span className="text-white/80">Net Profit</span>
                              <span className="text-green-500">+${checkoutDetails.profit}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground italic text-center opacity-60">
                              After fee: {checkoutDetails.fee} payout
                            </p>
                          </Motion.div>
                        )}
                      </AnimatePresence>
                   </Motion.div>
                </div>
              </div>
            </Card>
          </Motion.div>
        </div>
      </section>

      <section className="py-20 relative border-y border-white/5">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl text-white">How it Works</h2>
            <div className="h-[1px] w-24 bg-primary/20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              { icon: Globe, title: "Discover", desc: "Find public markets or create private spaces to track the topics your community cares about." },
              { icon: TrendingUp, title: "Predict", desc: "Place your predictions with precision using our risk-free Play Mode or real-market liquidity." },
              { icon: Trophy, title: "Earn", desc: "Rank up based on actual accuracy, climb leaderboards, and verify your track record globally." }
            ].map((step, idx) => (
              <Motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-center group cursor-default"
              >
                <div className="w-20 h-20 bg-white/5 border border-white/10 text-white/80 rounded-[2rem] flex items-center justify-center mx-auto mb-8 transition-all group-hover:scale-110 group-hover:border-white/30 group-hover:text-white">
                  <step.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium text-white/90">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light opacity-70 group-hover:opacity-100 transition-opacity">{step.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 relative border-t border-white/5">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-4xl font-light tracking-tight text-white">Safety by Design.</h2>
                <p className="text-muted-foreground text-xl font-light max-w-md opacity-70">
                  We build tools for healthy communities and secure transactions.
                </p>
              </div>
              <div className="flex gap-8">
                <Motion.div whileHover={{ y: -5 }} className="p-8 bg-secondary/20 border border-white/5 rounded-[2.5rem] flex flex-col items-center min-w-[120px]">
                  <span className="text-4xl font-light text-primary">17+</span>
                  <span className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] mt-2 opacity-60">AGE</span>
                </Motion.div>
                <Motion.div whileHover={{ y: -5 }} className="p-8 bg-secondary/20 border border-white/5 rounded-[2.5rem] flex flex-col items-center min-w-[120px]">
                  <Shield className="h-8 w-8 text-white/60 mb-2" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-foreground font-medium tracking-[0.2em] uppercase opacity-60">Escrow</span>
                </Motion.div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
               {[
                 { title: "Zero Tolerance", desc: "Our platform features automated and human moderation to ensure no objectionable content reaches your feed." },
                 { title: "Bank-Grade Security", desc: "Encrypted data management with Stripe & Supabase integration. Your privacy is non-negotiable." }
               ].map((box, i) => (
                 <Card key={i} className="bg-transparent border border-white/10 shadow-none group hover:border-white/20 transition-all rounded-[2.5rem]">
                    <CardContent className="p-12 space-y-6">
                      <h4 className="font-medium text-xl text-white/90 uppercase tracking-[0.2em]">{box.title}</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed font-light opacity-70 group-hover:opacity-100 transition-opacity">
                        {box.desc}
                      </p>
                    </CardContent>
                 </Card>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 container px-4 sm:px-8">
        <Motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-white/10 p-12 md:p-32 text-center rounded-[5rem] space-y-12 relative overflow-hidden group transition-all duration-700 bg-transparent shadow-none">
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <div className="space-y-8 py-4">
                <p className="text-xl md:text-3xl font-light tracking-tight text-white/90 leading-relaxed italic max-w-2xl mx-auto">
                  "We now have the ability to create any market from thin air. If it can be measured, it can be predicted—and some can be predicted with surprising accuracy."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-6 bg-white/10" />
                  <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-white/40">Founder</p>
                  <div className="h-[1px] w-6 bg-white/10" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a href="https://anymarket.expo.app/" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-20 px-16 text-2xl rounded-full bg-white text-black font-medium shadow-2xl hover:bg-white/90 hover:scale-[1.02] transition-all active:scale-95">
                    Launch AnyMarket
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </Motion.div>
      </section>
    </div>
  );
}

