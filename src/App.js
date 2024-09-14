import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/CardBlock.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=example&lang=en&country=india&max=10&apikey=${process.env.REACT_APP_API_KEY}`
      );
      setNews(response.data.articles); // Assuming response contains `articles` array
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <Card
            key={index}
            headline={article.title}
            img={article.image}
            description={article.content}
            link={article.url}
            sourceName={article.source.name}
            sourceLink={article.source.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
