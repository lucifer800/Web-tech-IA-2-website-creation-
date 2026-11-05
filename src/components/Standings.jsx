import { universities } from '../data/standings';
import './Standings.css';

function Standings() {
  return (
    <section id="standings" className="standings">
      <div className="standings__grid">
        <div>
          <div className="standings__label">03 — STANDINGS</div>
          <h2 className="standings__title">
            The race for<br /><span className="standings__accent">the Cup</span>
          </h2>
          <p className="standings__desc">
            The points table goes live at the opening ceremony. Gold&nbsp;=&nbsp;10,
            silver&nbsp;=&nbsp;6, bronze&nbsp;=&nbsp;3 — the most points lifts the Energy Cup.
          </p>
        </div>

        <div className="standings__card">
          <div className="standings__card-header">
            <span>Points table</span>
            <span className="standings__card-tag">Opens Day 1</span>
          </div>
          <div className="standings__row standings__row--header">
            <span>#</span>
            <span>UNIVERSITY</span>
            <span className="standings__cell--center standings__cell--gold">G</span>
            <span className="standings__cell--center">S</span>
            <span className="standings__cell--center">B</span>
            <span className="standings__cell--right">PTS</span>
          </div>
          {universities.map(r => (
            <div
              key={r.rank}
              className={`standings__row standings__row--data ${r.rank === 1 ? 'standings__row--leader' : ''}`}
            >
              <span className={`standings__rank ${r.rank === 1 ? 'standings__rank--gold' : r.rank <= 3 ? 'standings__rank--top' : ''}`}>
                {r.rank}
              </span>
              <span className="standings__name">{r.name}</span>
              <span className="standings__cell--center standings__medal">{r.g}</span>
              <span className="standings__cell--center standings__medal">{r.s}</span>
              <span className="standings__cell--center standings__medal">{r.b}</span>
              <span className="standings__pts">{r.pts}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Standings;
