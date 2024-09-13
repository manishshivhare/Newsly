import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=bee750c6e338ff8b54f2b031b0dc6d14`
        );
        setNews(response.data.articles); // Assuming response contains `articles` array
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <Card
          key={index}
          headline={article.title}
          img={article.image}
          description={article.description}
          link = {article.url}
        />
      ))}
    </div>
  );
}

export default App;
