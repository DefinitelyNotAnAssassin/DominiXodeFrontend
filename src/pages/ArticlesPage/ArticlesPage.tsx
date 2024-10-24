'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArticleCard from "./components/ArticleCard";
import { BASE_URL } from "@/utils/constants/UrlConstants";
import Navbar from "@/components/ui/navbar";
import { Article } from "@/types/Article";
import ViewArticle from "./components/ViewArticle";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ArticlesPage = () => { 
  const DEFAULT_ARTICLE_IMAGE = BASE_URL + "/static/domini_xode_logo.jpg";
  const [articles, setArticles] = useState<Article[]>([]); 
  useEffect(() => {
    fetch(`${BASE_URL}/api/getArticles`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-3 py-20 px-20 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="h-full w-full"
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Stagger effect
              ease: "easeOut",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className = "h-full w-full"
            >
              <ArticleCard 
                title={article.title} 
                description={article.description} 
                image={article.image ? article.image : DEFAULT_ARTICLE_IMAGE} 
                id={article.id} 
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}   

export default ArticlesPage;