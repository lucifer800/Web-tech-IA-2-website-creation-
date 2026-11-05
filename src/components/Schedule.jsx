import { useState } from 'react';
import { dayLabels, fixtures, sportOptions } from '../data/fixtures';
import './Schedule.css';

function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeSport, setActiveSport] = useState('All sports');

  const dayFixtures = fixtures[activeDay] || [];
  const filtered = activeSport === 'All sports'
    ? dayFixtures
    : dayFixtures.filter(f => f.sport === activeSport);

  return (
    <section id="schedule" className="schedule">
      <div className="schedule__header">
        <div>
          <div className="schedule__label">02 — FIXTURES</div>
          <h2 className="schedule__title">What's on</h2>
          <p className="schedule__subtitle">
            Provisional fixtures — final draw published after registrations close.
          </p>
        </div>
        <div className="schedule__actions">
          <select
            className="schedule__select"
            value={activeSport}
            onChange={e => setActiveSport(e.target.value)}
          >
            {sportOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <a href="#" className="schedule__pdf">↓ PDF schedule</a>
        </div>
      </div>

      <div className="schedule__days">
        {dayLabels.map((d, i) => (
          <button
            key={i}
            className={`schedule__day ${activeDay === i ? 'schedule__day--active' : ''}`}
            onClick={() => setActiveDay(i)}
          >
            <div className="schedule__day-label">{d.label}</div>
            <div className="schedule__day-date">{d.date}</div>
          </button>
        ))}
      </div>

      <div className="schedule__table-wrap">
        <div className="schedule__table">
          <div className="schedule__row schedule__row--header">
            <span>TIME</span>
            <span>SPORT</span>
            <span>FIXTURE</span>
            <span>VENUE</span>
            <span className="schedule__cell--right">STATUS</span>
          </div>

          {filtered.map((f, i) => (
            <div key={i} className="schedule__row schedule__row--data">
              <span className="schedule__time">{f.time}</span>
              <span className="schedule__sport">{f.sport}</span>
              <span className="schedule__match">{f.match}</span>
              <span className="schedule__venue">{f.venue}</span>
              <span className="schedule__status">Upcoming</span>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="schedule__empty">
              No fixtures for this sport on this day.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
