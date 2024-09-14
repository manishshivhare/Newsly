import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/CardBlock.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${process.env.REACT_APP_API_KEY}`
      );
      setNews((prevNews) => [...prevNews, ...response.data.articles]);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    fetchNews();
  };

  useEffect(() => {
    setLoading(true);
    fetchNews();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 grid grid-cols-1 gap-6 w-[800px]">
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
          className="px-6 py-3 bg-[#53c1c0] text-white rounded-lg hover:bg-[#45b2a5] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default App;
