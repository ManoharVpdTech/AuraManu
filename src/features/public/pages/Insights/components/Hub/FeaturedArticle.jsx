import React from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { authors } from "../../../../../../data/authors";

export const FeaturedArticle = ({ article }) => {
  if (!article) return null;

  const author = authors.find(a => a.id === article.authorId);

  return (
    <section id="featured" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-card border border-border/40 rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors shadow-2xl">
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-6 block">
                FEATURED • {article.category.replace('-', ' ')}
              </span>
              
              <Link href={`/insights/${article.slug}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h2>
              </Link>
              
              <p className="text-lg text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-10 font-mono">
                {author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
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

              <div>
                <Link 
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="flex-1 bg-[#0a0f18] relative overflow-hidden hidden lg:block">
              {/* Abstract Technical Visual for Featured Article */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-primary/30 rounded-full flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                  <div className="w-48 h-48 border border-cyan-500/30 rounded-full flex items-center justify-center animate-[spin_15s_linear_reverse_infinite]">
                    <div className="w-32 h-32 bg-primary/10 rounded-full backdrop-blur-md border border-primary/50 flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.3)]">
                       <span className="font-mono text-xs text-primary font-bold tracking-widest">DATA_FLOW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
