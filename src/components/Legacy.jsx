import { timeline, pastWinners } from '../data/standings';
import './Legacy.css';

function Legacy() {
  return (
    <section id="legacy" className="legacy">
      <div className="legacy__label">04 — LEGACY</div>
      <h2 className="legacy__title">
        From Petrocup<br />to Energy Cup
      </h2>

      <div className="legacy__timeline">
        {timeline.map(t => (
          <div key={t.year} className="legacy__era">
            <div className="legacy__year" style={{ color: t.color }}>{t.year}</div>
            <div className="legacy__heading">{t.heading}</div>
            <p className="legacy__desc">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="legacy__bottom">
        <div className="legacy__video">
          <div className="legacy__video-tag">[ Energy Cup '26 aftermovie — YouTube embed ]</div>
          <button className="legacy__play">▶</button>
          <div className="legacy__video-title">Official aftermovie</div>
        </div>

        <div className="legacy__winners">
          <div className="legacy__winners-label">ENERGY CUP '25 · TITLE WINNERS</div>
          {pastWinners.map(w => (
            <div key={w.event} className="legacy__winner-row">
              <span className="legacy__winner-event">{w.event}</span>
              <span className="legacy__winner-team">{w.team}</span>
            </div>
          ))}
          <a href="#" className="legacy__champions-link">Hall of champions →</a>
        </div>
      </div>
    </section>
  );
}

export default Legacy;
