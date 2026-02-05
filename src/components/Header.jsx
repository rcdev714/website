import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils'; // Ensure utils is imported

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6 sm:px-8">
        <div className="mr-4 hidden md:flex items-center">
          <Link to="/" className="mr-8 flex items-center space-x-3 group" aria-label="AnyMarket Home">
            <div className="w-10 h-10 rounded-xl bg-secondary border border-primary/20 p-1.5 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-primary/5">
              <img src="/icon.png" alt="AnyMarket Logo" className="w-full h-full object-contain" />
            </div>
            <span className="hidden font-black text-xl tracking-tighter text-accent sm:inline-block">AnyMarket</span>
          </Link>
          <NavigationMenu aria-label="Main Navigation">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:text-primary transition-colors font-medium")} aria-label="Go to Home Page">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/support" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:text-primary transition-colors font-medium")} aria-label="Go to Support Page">
                  Support
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Logo */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
           <Link to="/" className="mr-6 flex items-center space-x-2 md:hidden" aria-label="AnyMarket Home">
            <div className="w-10 h-10 rounded-xl bg-secondary border border-primary/20 p-1.5 flex items-center justify-center">
              <img src="/icon.png" alt="AnyMarket Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-xl tracking-tighter text-accent">AnyMarket</span>
          </Link>

          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center space-x-4" aria-label="External Links">
            <a
              href="https://anymarket--ijjy615w7s.expo.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Launch AnyMarket Web Application"
            >
              <Button size="sm" className="bg-secondary border border-primary/30 text-primary hover:bg-secondary/80 font-bold px-6 rounded-full shadow-lg transition-all active:scale-95">
                Open App
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}


