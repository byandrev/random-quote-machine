import "./styles.sass";
import TwitterIcon from "../TwitterIcon";

function Box({ quote = "", author = "", generateQuote }) {
  return (
    <div id="quote-box" className="Box">
      <div>
        <p id="text" className="Box-Text">
          {quote}
        </p>
        <p id="author" className="Box-Author">
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
        <button id="new-quote" className="Btn" onClick={generateQuote}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default Box;
