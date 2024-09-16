import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Card from "./components/CardBlock.jsx";
import Header from "./components/Header.jsx";
import dayjs from "dayjs";
import CategoryBar from "./components/CategoryBar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTop.jsx";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [customDate, setCustomDate] = useState(
    dayjs().format("YYYY-MM-DDThh:mm:ss[Z]")
  );

  const fetchNews = useCallback(async (date) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&to=${date}&apikey=${process.env.REACT_APP_API_KEY}`
      );
      setNews((prevNews) => [...prevNews, ...data.articles]);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = useCallback(() => {
    const newDate = dayjs(customDate)
      .subtract(10, "days")
      .format("YYYY-MM-DDThh:mm:ss[Z]");
    setCustomDate(newDate);
  }, [customDate]);

  useEffect(() => {
    fetchNews(customDate);
  }, [customDate, fetchNews]);

  return (
    <div>
      <Header />
      <CategoryBar />
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-1 gap-6">
        {news.map((article, index) => (
          <Card
            key={index}
            headline={article.title}
            img={article.image}
            description={article.content}
            link={article.url}
            sourceName={article.source.name}
            sourceLink={article.source.url}
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
