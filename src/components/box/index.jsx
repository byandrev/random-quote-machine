import { useRef, useState } from "react";
import "./styles.sass";
import TwitterIcon from "../TwitterIcon";
import copyToClipboard from "../../utils/clipboard";

function Box({ quote = "", author = "", generateQuote }) {
  const textRef = useRef(null);
  const authorRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const setTimer = (seconds) => {
    setTimeout(() => {
      setCopied(false);
      console.log("YA!!");
    }, seconds);
  };

  const handleCopy = () => {
    copyToClipboard(`${quote} ${author}`);
    setCopied(true);
    setTimer(1000);
  };

  const handleGenerateQuote = () => {
    if (textRef.current && authorRef.current) {
      textRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
      });
      authorRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
      });
    }

    generateQuote();
  };

  return (
    <div id="quote-box" className="Box">
      <div>
        <p id="text" className="Box-Text" ref={textRef}>
          {quote}
        </p>
        <p id="author" className="Box-Author" ref={authorRef}>
          {author}
        </p>
      </div>
      <div className="Box-Footer">
        <div>
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote} ${author}`}
            id="tweet-quote"
            target="_blank"
            className="Box-Link"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
        <div className="Box-Buttons">
          <button className="Btn" onClick={handleCopy}>
            {copied ? "Copied" : "Copy"}
          </button>
          <button id="new-quote" className="Btn" onClick={handleGenerateQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
