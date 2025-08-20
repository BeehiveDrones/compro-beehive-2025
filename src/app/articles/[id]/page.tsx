'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import Image from 'next/image';
import { Article, articles } from '../../../data/articlesData'; 
import Link from 'next/link';

const ArticleContent: React.FC = () => {
  const params = useParams();
  const articleId = params.id as string; 
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (articleId) {
      const foundArticle = articles.find(a => a.id === parseInt(articleId));
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        setArticle(null);
      }
    }
  }, [articleId]);

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-20 ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 font-exo2">
        {article.title}
      </h1>
      <div className="text-sm text-gray-500 mb-6 font-open-sans">
        <span>{article.category}</span>
        <span className="mx-2">|</span>
        <span>{article.dateUpload}</span>
        <br />
        <span>Penulis: {article.author}</span>
      </div>

      {article.images.length === 1 ? (
        <div className="flex justify-center mb-8"> 
          <div className="relative w-full md:w-4/4 h-100">
            <Image 
              src={article.images[0]} 
              alt={`${article.title} Image 1`}
              fill 
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 justify-items-center">
          {article.images.map((imgSrc, index) => (
            <div key={index} className="relative w-full h-80"> 
              <Image 
                src={imgSrc} 
                alt={`${article.title} Image ${index + 1}`}
                fill 
                className="object-cover rounded-lg" 
              />
            </div>
          ))}
        </div>
      )}

      {/* Render paragraf dengan HTML */}
      {article.content.map((paragraph, index) => (
        <p
          key={index}
          className="text-lg text-gray-700 leading-relaxed mb-4 text-justify"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}

      <Link
        href="/articles"
        className="text-blue-600 font-medium hover:text-blue-800 transition-colors mt-8 block"
      >
        ← Back to Articles
      </Link>
    </div>
  );
};

export default ArticleContent;
