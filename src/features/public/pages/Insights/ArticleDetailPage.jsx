import React, { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { blogPosts } from "../../../../data/blogPosts";
import { ArticleHero } from "./components/Detail/ArticleHero";
import { ReadingProgress } from "./components/Detail/ReadingProgress";
import { TableOfContents } from "./components/Detail/TableOfContents";
import { ArticleContent } from "./components/Detail/ArticleContent";
import { AuthorCard } from "./components/Detail/AuthorCard";
import { ShareButtons } from "./components/Detail/ShareButtons";
import { RelatedContent } from "./components/Detail/RelatedContent";
import { InsightsCTA } from "./components/Hub/InsightsCTA";

export const ArticleDetailPage = () => {
  const params = useParams();
  const [, setLocation] = useLocation();
  
  const article = blogPosts.find(p => p.slug === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!article) {
    setLocation("/not-found");
    return null;
  }

  return (
    <div className="bg-background min-h-screen">
      <ReadingProgress />
      <ArticleHero article={article} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Main Content Area */}
          <div className="flex-1 lg:max-w-[800px]">
            <ArticleContent content={article.content} />
            <AuthorCard authorId={article.authorId} />
            <ShareButtons title={article.title} />
          </div>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <TableOfContents content={article.content} />
          </aside>

        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedContent currentArticle={article} />
      </div>

      <InsightsCTA />
    </div>
  );
};

export default ArticleDetailPage;
