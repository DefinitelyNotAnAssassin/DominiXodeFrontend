import { useEffect, useState  } from "react";
import ArticleCard from "./components/ArticleCard";
import { BASE_URL } from "@/utils/constants/UrlConstants";
import Navbar from "@/components/ui/navbar";
import { Article } from "@/types/Article";

const ArticlesPage = () => { 

    const DEFAULT_ARTICLE_IMAGE  = BASE_URL + "/static/domini_xode_logo.jpg";
    const [articles, setArticles] = useState<Article[]>([]); 

    useEffect(() => {
        fetch(`${BASE_URL}/api/getArticles`)
            .then((response) => response.json())
            .then((data) => setArticles(data));
    }, []);



    return (

        <>
        <Navbar />
        <div className = "h-screen w-full grid grid-cols-1 md:grid-cols-3 py-20 px-20 gap-8">
         
         {articles.map((article) => (
             <ArticleCard key={article.id} title={article.title} description={article.description} image={article.image ? article.image : DEFAULT_ARTICLE_IMAGE} id={article.id} />
           ))}
       </div>
        </>
      
    );
}   



export default ArticlesPage