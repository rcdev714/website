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
    <div className="container mx-auto py-12 px-6 max-w-2xl min-h-[80vh]">
      <div className="mb-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mb-6 hover:bg-transparent text-muted-foreground hover:text-foreground pl-0 group"
          aria-label="Go back to previous page"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back
        </Button>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h1>
      </div>
      
      <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-ul:text-muted-foreground">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );

}

