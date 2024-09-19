import React, { useEffect, useState, useCallback } from "react";
import Card from "./components/CardBlock.jsx";
import Header from "./components/Header.jsx";
import CategoryBar from "./components/CategoryBar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTop.jsx";
import { fetchNews } from "./utils/fetchNews.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.loading).payload;
  const category = useSelector((state) => state.user.category).payload;
  const nextPage = useSelector((state) => state.user.nextPage).payload;

  useEffect(() => {
    const loadNews = async () => {
      const fetchedNews = await fetchNews(dispatch, category);
      setNews(fetchedNews || []);
    };
    loadNews();
  }, [category, dispatch]);

  const handleLoadMore = useCallback(() => {
    const loadNews = async () => {
      const fetchedNews = await fetchNews(dispatch, category, nextPage);
      setNews((prevNews) => [...prevNews, ...fetchedNews]);
    };
    loadNews();
  }, [nextPage, category, dispatch]);

  const handleCategoryChange = async () => {
    const fetchedNews = await fetchNews(dispatch, category);
    setNews(fetchedNews);
  };

  return (
    <div>
      <Header />
      <CategoryBar onCategoryChange={handleCategoryChange} />
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-1 gap-6">
        {news.map((article, index) => (
          <Card
            key={index}
            headline={article.title}
            img={article.image_url}
            description={article.description}
            link={article.link}
            sourceName={article.source_id}
            sourceLink={article.source_url}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
      <div className="text-center py-4">
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#53c1c0] rounded-md hover:bg-[#45b2a5] focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
