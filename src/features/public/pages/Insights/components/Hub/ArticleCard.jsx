import React from "react";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { authors } from "../../../../../../data/authors";

export const ArticleCard = ({ article }) => {
  const author = authors.find(a => a.id === article.authorId);

  return (
    <Link href={`/insights/${article.slug}`} className="group flex flex-col h-full bg-card border border-border/40 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Abstract Cover Visual */}
      <div className="h-48 bg-[#0a0f18] relative overflow-hidden flex-shrink-0 border-b border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Simple SVG/CSS shapes based on cover visual type */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
          {article.coverVisual === "architecture-diagram" && (
            <div className="flex gap-4">
              <div className="w-12 h-12 border-2 border-primary rounded-sm" />
              <div className="w-12 h-12 border-2 border-primary rounded-full" />
              <div className="w-12 h-12 border-2 border-primary rounded-sm" />
            </div>
          )}
          {article.coverVisual === "ai-network" && (
            <div className="relative w-24 h-24">
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-primary rounded-full" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full" />
              <svg className="absolute inset-0 w-full h-full text-primary/50" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="2" x2="2" y2="22" />
                <line x1="12" y1="2" x2="22" y2="22" />
                <line x1="2" y1="22" x2="22" y2="22" />
              </svg>
            </div>
          )}
          {article.coverVisual === "data-flow" && (
            <div className="flex flex-col gap-3">
              <div className="w-24 h-2 bg-primary/40 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
              <div className="w-32 h-2 bg-primary/40 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-primary animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
              <div className="w-20 h-2 bg-primary/40 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-primary animate-[pulse_1.5s_ease-in-out_infinite]" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-mono font-bold text-primary tracking-wider uppercase mb-3 block">
          {article.category.replace('-', ' ')}
        </span>
        
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-muted text-muted-foreground rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
          <div className="flex items-center gap-3">
            {author && (
              <div className="text-xs font-medium text-foreground">
                {author.name}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
            <Clock className="w-3 h-3" />
            <span>{article.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
