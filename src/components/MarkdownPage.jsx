import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';

export default function MarkdownPage({ content, title }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]);

  return (
    <div className="container mx-auto py-24 px-6 max-w-4xl min-h-[80vh]">
      <div className="mb-16 animate-fade-in text-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mb-8 hover:bg-secondary/50 rounded-full group text-muted-foreground"
          aria-label="Go back to previous page"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Home
        </Button>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-metallic">{title}</h1>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
      </div>
      
      <div className="prose prose-invert max-w-none prose-headings:text-accent prose-p:text-accent/80 prose-strong:text-primary animate-slide-up bg-secondary/20 p-8 md:p-12 rounded-[2rem] border border-primary/5 shadow-2xl">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );

}

