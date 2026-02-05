import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-6 md:px-8">
      <div className="container flex flex-col items-center justify-between gap-8 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} <span className="text-primary font-medium tracking-wide">AnyMarket Inc.</span> All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-10" aria-label="Legal and Support links">
          <Link to="/privacy" className="text-sm font-medium text-accent hover:text-primary transition-all underline underline-offset-4 decoration-transparent hover:decoration-primary" aria-label="View Privacy Policy">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm font-medium text-accent hover:text-primary transition-all underline underline-offset-4 decoration-transparent hover:decoration-primary" aria-label="View Terms of Service">
            Terms of Service
          </Link>
          <Link to="/support" className="text-sm font-medium text-accent hover:text-primary transition-all underline underline-offset-4 decoration-transparent hover:decoration-primary" aria-label="View Support Page">
            Support
          </Link>
        </nav>

      </div>
    </footer>
  );
}

