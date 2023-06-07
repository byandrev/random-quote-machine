import { useEffect, useState } from "react";
import Box from "./components/box";
import { getQuotes } from "./services/quotes";
import generateRandom from "./utils/random";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  const generateQuote = () => {
    setQuote(quotes[generateRandom(quotes.length)]);
  };

  useEffect(() => {
    const get = async () => {
      const { quotes } = await getQuotes();
      setQuotes(quotes);
      setQuote(quotes[generateRandom(quotes.length)]);
    };
    get();
  }, []);

  return (
    <>
      <Box {...quote} generateQuote={generateQuote} />
    </>
  );
}

export default App;
