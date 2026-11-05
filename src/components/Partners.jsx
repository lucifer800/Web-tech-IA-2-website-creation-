import { tiers } from '../data/partners';
import './Partners.css';

function Partners() {
  return (
    <section id="sponsors" className="partners">
      <div className="partners__header">
        <div>
          <div className="partners__label">05 — PARTNERS</div>
          <h2 className="partners__title">Power the Cup</h2>
          <p className="partners__desc">
            Reach 10,000+ students, an 18–22 Gen Z core and campuses across Ahmedabad
            and Gandhinagar. Sports PDEU content drew 140K+ Instagram views in the last 30 days.
          </p>
        </div>
        <a href="#" className="partners__cta">Become a partner · Deck ↓</a>
      </div>

      <div className="partners__tiers">
        <div className="partners__tier">
          <div className="partners__tier-name" style={{ color: 'var(--accent-amber)' }}>TITLE PARTNER</div>
          <div className="partners__title-slot">[ title partner logo ]</div>
        </div>

        {tiers.map(t => (
          <div key={t.name} className="partners__tier">
            <div className="partners__tier-name" style={{ color: t.color }}>{t.name}</div>
            <div className="partners__tier-grid">
              {t.slots.map(s => (
                <div key={s} className="partners__slot" style={{ height: t.height }}>logo</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
