import React from "react";
import { authors } from "../../../../../../data/authors";

export const AuthorCard = ({ authorId }) => {
  const author = authors.find(a => a.id === authorId);
  
  if (!author) return null;

  return (
    <div className="bg-card border border-border/40 rounded-xl p-8 mt-12 mb-16">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-lg">
          {author.image ? (
            <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-3xl font-bold text-primary font-mono">{author.name.charAt(0)}</span>
          )}
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-foreground mb-1">{author.name}</h4>
          <p className="text-sm font-mono text-primary mb-4">{author.role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {author.bio}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {author.expertise.map(exp => (
              <span key={exp} className="text-[10px] font-mono px-2 py-1 bg-muted text-muted-foreground rounded border border-border/40">
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
