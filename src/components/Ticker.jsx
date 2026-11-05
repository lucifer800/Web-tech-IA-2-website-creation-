import { tickerItems } from '../data/ticker';
import './Ticker.css';

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="ticker">
      <div className="ticker__label">
        <span className="ticker__dot" />
        Energy Cup '27
      </div>
      <div className="ticker__track">
        <div className="ticker__scroll">
          {doubled.map((item, i) => (
            <span className="ticker__item" key={i}>
              <span className="ticker__sport">{item.sport}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ticker;
