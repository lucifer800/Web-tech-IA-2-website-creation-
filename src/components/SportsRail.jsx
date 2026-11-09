import { useState, useRef } from 'react';
import { sports, categories } from '../data/sports';
import sportImages from '../data/sportImages';
import './SportsRail.css';

function SportsRail() {
  const [activeCat, setActiveCat] = useState('All');
  const railRef = useRef(null);

  const filtered = activeCat === 'All'
    ? sports
    : sports.filter(s => s.cat === activeCat);

  const scroll = (dir) => {
    railRef.current?.scrollBy({ left: dir * 306, behavior: 'smooth' });
  };

  return (
    <section id="sports" className="sports">
      <div className="sports__header">
        <div>
          <div className="sports__label">01 — THE ARENA</div>
          <h2 className="sports__title">
            {sports.length} sports.<br />One cup.
          </h2>
        </div>
        <div className="sports__controls">
          <div className="sports__filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`sports__filter ${activeCat === cat ? 'sports__filter--active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="sports__arrows">
            <button className="sports__arrow" onClick={() => scroll(-1)}>←</button>
            <button className="sports__arrow" onClick={() => scroll(1)}>→</button>
          </div>
        </div>
      </div>

      <div ref={railRef} className="sports__rail">
        {filtered.map(sp => (
          <a key={sp.slug} href={`#sport-${sp.slug}`} className="sports__card">
            <div className="sports__card-image">
              {sportImages[sp.slug] ? (
                <img src={sportImages[sp.slug]} alt={sp.name} className="sports__card-photo" />
              ) : (
                <div className="sports__card-placeholder">[ {sp.name} action shot ]</div>
              )}
              <div className="sports__card-number">{sp.n}</div>
              <div className="sports__card-cat">{sp.cat}</div>
            </div>
            <div className="sports__card-body">
              <div className="sports__card-name">{sp.name}</div>
              <div className="sports__card-meta">
                <div>
                  <div className="sports__card-meta-label">CATEGORY</div>
                  {sp.gender}
                </div>
                <div>
                  <div className="sports__card-meta-label">FORMAT</div>
                  {sp.format}
                </div>
              </div>
              <div className="sports__card-footer">
                <span>Rules · fixtures</span>
                <span className="sports__card-link">Details →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SportsRail;
