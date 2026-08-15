import React from "react";

export const CategoryNavigation = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full border-b border-border/10 mb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto hide-scrollbar space-x-8 py-4">
          <button
            onClick={() => setActiveCategory("")}
            className={`whitespace-nowrap pb-2 text-sm font-bold transition-colors ${
              activeCategory === ""
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ALL
          </button>
          
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`whitespace-nowrap pb-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeCategory === category.slug
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
