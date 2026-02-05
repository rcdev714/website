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
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)] overflow-x-hidden">
      {/* Hero Section */}
      <section 
        aria-labelledby="hero-heading"
        className="relative flex flex-col items-center justify-center py-24 px-6 text-center md:py-48 lg:py-64 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
        
        {/* Animated Background Shapes - Metallic Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-primary/5 rounded-full pointer-events-none" />

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="container relative z-10 space-y-10"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <span className="inline-block px-5 py-2 text-[10px] font-bold tracking-[0.3em] uppercase bg-secondary border border-primary/20 text-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              AnyMarket Intelligence
            </span>
            <h1 id="hero-heading" className="text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-metallic leading-[0.85] pb-6">
              Predict <br /> Everything.
            </h1>
            <p className="mx-auto max-w-[750px] text-muted-foreground text-xl md:text-2xl font-light leading-relaxed">
              The social prediction market designed for a new era of transparency, accuracy, and collective intelligence.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-col gap-6 justify-center items-center sm:flex-row pt-8">
            <a href="https://anymarket--ijjy615w7s.expo.app/" target="_blank" rel="noreferrer" aria-label="Open AnyMarket Web App">
              <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-secondary border border-primary/30 text-primary hover:bg-secondary/80 hover:border-primary/60 shadow-[0_0_40px_rgba(212,175,55,0.1)] transition-all hover:scale-105 active:scale-95 group">
                Launch App <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="h-16 px-12 text-xl rounded-full border-accent/20 text-accent hover:bg-accent/5 hover:border-accent/40 transition-all">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* How it Works Section - Gold Divider lines */}
      <section className="py-32 bg-secondary/5 relative border-y border-primary/10">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-24">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-accent">How it Works</h2>
            <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="space-y-6 text-center group">
              <div className="w-20 h-20 bg-secondary border border-primary/20 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                <Globe size={40} />
              </div>
              <h3 className="text-2xl font-bold text-accent">1. Discover</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Find public markets or create private spaces to track the topics your community cares about.</p>
            </div>
            <div className="space-y-6 text-center group">
              <div className="w-20 h-20 bg-secondary border border-primary/20 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-3 shadow-lg">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-2xl font-bold text-accent">2. Predict</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Place your predictions with precision using our risk-free Play Mode or real-market liquidity.</p>
            </div>
            <div className="space-y-6 text-center group">
              <div className="w-20 h-20 bg-secondary border border-primary/20 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <Trophy size={40} />
              </div>
              <h3 className="text-2xl font-bold text-accent">3. Earn</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Rank up based on actual accuracy, climb leaderboards, and verify your track record globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions / Explanation Detail */}
      <section className="py-32 container px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold tracking-tighter text-metallic leading-tight">Social Connection, <br /> Not Just Numbers.</h2>
              <p className="text-muted-foreground text-xl leading-relaxed font-light">
                Built on relationships. AnyMarket transforms prediction into a shared experience of discovery and competition.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { icon: MessageSquare, title: "Contextual Discussions", desc: "Every prediction market has its own space for research sharing and debate." },
                { icon: Shield, title: "Verified Reputation", desc: "Your accuracy is your passport. Build a track record that matters." },
                { icon: Zap, title: "Real-Time Volatility", desc: "Experience the pulse of the crowd with sub-second probability updates." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="shrink-0 w-14 h-14 bg-secondary border border-primary/10 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:border-primary/40 group-hover:bg-secondary/80">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-accent">{item.title}</h4>
                    <p className="text-muted-foreground text-lg font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-[100px] transform -rotate-6 pointer-events-none" />
            <Card className="relative border-primary/20 shadow-2xl overflow-hidden bg-secondary/50 backdrop-blur-2xl rounded-[3rem] p-4">
              <div className="p-10 space-y-10">
                <div className="space-y-3 text-center">
                  <h3 className="text-3xl font-bold text-accent">Live Markets</h3>
                  <div className="h-1 w-12 bg-primary/20 mx-auto rounded-full" />
                </div>
                
                <div className="space-y-6 w-full max-w-sm mx-auto">
                   <div className="p-8 bg-background border border-primary/10 rounded-[2rem] space-y-6 shadow-inner">
                      <p className="font-bold text-lg text-accent text-center">Apple Vision Pro 2 <br /> launched by Q4 2026?</p>
                      <div className="flex justify-between items-center text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                        <span>POOL: 85,200 🟪</span>
                        <span>LIVE</span>
                      </div>
                      <div className="flex gap-4">
                        <Button className="flex-1 h-12 rounded-2xl bg-primary text-primary-foreground font-black hover:scale-[1.02] transition-transform shadow-lg shadow-primary/10">YES (42%)</Button>
                        <Button variant="outline" className="flex-1 h-12 rounded-2xl border-primary/20 text-primary hover:bg-primary/5 font-black hover:scale-[1.02] transition-transform">NO (58%)</Button>
                      </div>
                   </div>
                   
                   <div className="p-5 bg-secondary/80 rounded-2xl border border-primary/10 text-center animate-pulse shadow-sm">
                      <p className="text-xs font-bold text-white/60 uppercase tracking-tighter">Recent activity</p>
                      <p className="text-sm font-medium pt-1 text-primary">User_842 predicted <span className="font-black underline decoration-primary/40">NO</span></p>
                   </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/10 overflow-hidden relative border-t border-primary/5">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-accent">Safety by Design.</h2>
                <p className="text-muted-foreground text-xl font-light max-w-md">
                  We build tools for healthy communities and secure transactions.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="p-6 bg-secondary border border-primary/20 rounded-3xl shadow-xl flex flex-col items-center min-w-[100px]">
                  <span className="text-4xl font-black text-primary">17+</span>
                  <span className="text-[10px] text-muted-foreground font-black tracking-widest mt-1">AGE</span>
                </div>
                <div className="p-6 bg-secondary border border-primary/20 rounded-3xl shadow-xl flex flex-col items-center min-w-[100px]">
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <span className="text-[10px] text-muted-foreground font-black tracking-widest uppercase">Escrow</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
               {[
                 { title: "Zero Tolerance", desc: "Our platform features automated and human moderation to ensure no objectionable content reaches your feed." },
                 { title: "Bank-Grade Security", desc: "Encrypted data management with Stripe & Supabase integration. Your privacy is non-negotiable." }
               ].map((box, i) => (
                 <Card key={i} className="bg-secondary border border-primary/10 shadow-lg group hover:border-primary/30 transition-colors rounded-[2rem]">
                    <CardContent className="p-10 space-y-4">
                      <h4 className="font-black text-xl text-primary uppercase tracking-widest">{box.title}</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed font-light">
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
        <Card className="bg-secondary border border-primary/30 p-12 md:p-32 text-center rounded-[4rem] space-y-10 relative overflow-hidden group transition-all duration-700 hover:shadow-[0_0_80px_rgba(212,175,55,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 pointer-events-none" />
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-metallic leading-tight">Define Your <br /> Own Future.</h2>
            <p className="text-muted-foreground md:text-2xl font-light italic">
              "Accuracy is the only currency that matters."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a href="https://anymarket--ijjy615w7s.expo.app/" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-16 px-16 text-xl rounded-full bg-primary text-primary-foreground font-black shadow-2xl hover:scale-105 transition-transform active:scale-95">
                  Launch AnyMarket
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

