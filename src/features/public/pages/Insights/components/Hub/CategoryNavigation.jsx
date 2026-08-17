import React from "react";

export const CategoryNavigation = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full border-b border-[rgba(140,174,187,0.15)] mb-10 bg-[#050811]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex overflow-x-auto hide-scrollbar gap-2 py-3 scroll-smooth"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <button
            onClick={() => setActiveCategory("")}
            className={`whitespace-nowrap px-4 py-2 text-xs font-semibold tracking-wider rounded-md transition-all ${
              activeCategory === ""
                ? "bg-[#63f5e8] text-[#041014] shadow-[0_0_15px_rgba(99,245,232,0.25)] font-bold"
                : "text-[#8da5ae] hover:text-white hover:bg-[rgba(140,174,187,0.08)]"
            }`}
          >
            ALL CATEGORIES
          </button>
          
          {categories.map(category => {
            const isActive = activeCategory === category.slug;
            return (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                  isActive
                    ? "bg-[#63f5e8] text-[#041014] shadow-[0_0_15px_rgba(99,245,232,0.25)] font-bold"
                    : "text-[#8da5ae] hover:text-white hover:bg-[rgba(140,174,187,0.08)]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

