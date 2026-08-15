import React from "react";
import { Link } from "wouter";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { authors } from "../../../../../../data/authors";

export const ArticleHero = ({ article }) => {
  const author = authors.find(a => a.id === article.authorId);

  return (
    <section className="pt-32 pb-16 bg-[#050B14] relative overflow-hidden border-b border-border/10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          href="/insights"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO INSIGHTS
        </Link>
        
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-6 block">
            {article.category.replace('-', ' ')}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 font-mono">
            {author && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {author.name.charAt(0)}
                </div>
                <span>{author.name}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {article.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
