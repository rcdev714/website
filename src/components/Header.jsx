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
        <div className="flex items-center gap-8">
          <NavigationMenu aria-label="Main Navigation">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground/60 hover:text-primary transition-colors font-light text-sm tracking-wide uppercase")} aria-label="Go to Home Page">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/support" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground/60 hover:text-primary transition-colors font-light text-sm tracking-wide uppercase")} aria-label="Go to Support Page">
                  Support
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="https://anymarket.expo.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Launch AnyMarket Web Application"
          >
            <Button size="sm" className="bg-secondary/50 border border-primary/20 text-primary/80 hover:bg-secondary hover:text-primary font-medium px-6 rounded-full shadow-lg transition-all active:scale-95">
              Open App
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}


