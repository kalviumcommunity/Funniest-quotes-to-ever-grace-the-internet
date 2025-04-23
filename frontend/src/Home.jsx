// QuoteList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/quotes') // Adjust if using proxy
      .then(response => {
        setQuotes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading quotes...</p>;

  return (
    <div className="quote-list">
      <h2>Funniest Quotes</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <p><strong>{quote.quote}</strong></p>
            <p>— {quote.author}</p>
            <small>{quote.source}</small>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
