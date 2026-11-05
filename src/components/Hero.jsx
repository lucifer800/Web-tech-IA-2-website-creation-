import { useRef, useEffect } from 'react';
import useCountdown from '../hooks/useCountdown';
import useAnimatedCount from '../hooks/useAnimatedCount';
import './Hero.css';

const STATS = [
  { target: 75, suffix: '+', label: 'Institutes' },
  { target: 8000, suffix: '+', label: 'Footfall' },
  { target: 14, suffix: '', label: 'Sports' },
  { target: 5, suffix: '', label: 'Days of play' },
];

function Hero() {
  const clock = useCountdown();
  const bgRef = useRef(null);
  const statsRef = useRef(null);
  const progress = useAnimatedCount(statsRef);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="top" className="hero">
      <div ref={bgRef} className="hero__bg">
        <div className="hero__placeholder">[ HERO · torch run / Energy Cup '26 montage ]</div>
      </div>
      <div className="hero__overlay" />
      <div className="hero__charge-bar">
        <div className="hero__charge-fill" />
      </div>

      <div className="hero__content">
        <div className="hero__left">
          <div className="hero__tags">
            <span className="hero__badge">PDEU's flagship sports fest</span>
            <span>8–14 Feb 2027 · PDEU, Gandhinagar</span>
          </div>
          <h1 className="hero__title">
            Energy<br />Cup <span className="hero__accent">'27</span>
          </h1>
          <p className="hero__desc">
            Learn. Play. Win. Universities from across India meet on the PDEU grounds
            for the region's biggest inter-university sports fest.
          </p>
          <div className="hero__actions">
            <a href="#register" className="hero__cta hero__cta--primary">
              Register your contingent →
            </a>
            <a href="#schedule" className="hero__cta hero__cta--outline">
              View schedule
            </a>
          </div>
        </div>

        <div className="hero__clock-card">
          <div className="hero__clock-header">
            <span>Kick-off in</span>
            <span className="hero__clock-tag">● Opening · 08.02.27</span>
          </div>
          <div className="hero__clock-grid">
            {clock.map((c) => (
              <div key={c.label} className="hero__clock-unit">
                <div className="hero__clock-value">
                  {c.value}
                  <div className="hero__clock-divider" />
                </div>
                <span className="hero__clock-label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={statsRef} className="hero__stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="hero__stat">
            <div className="hero__stat-value">
              {Math.round(stat.target * progress).toLocaleString('en-IN')}
              <span className="hero__stat-suffix">{stat.suffix}</span>
            </div>
            <div className="hero__stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Hero;
