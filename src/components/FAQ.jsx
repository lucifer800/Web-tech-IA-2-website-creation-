import { useState } from 'react';
import { faqs, reach } from '../data/faq';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section id="faq" className="faq">
      <div className="faq__grid">
        <div>
          <div className="faq__label">06 — BEFORE YOU ARRIVE</div>
          <h2 className="faq__title">Questions</h2>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div key={i} className="faq__item">
                <button className="faq__question" onClick={() => toggle(i)}>
                  {f.q}
                  <span className="faq__icon">{openIndex === i ? '–' : '+'}</span>
                </button>
                {openIndex === i && (
                  <p className="faq__answer">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="faq__sidebar">
          <div className="faq__map">
            <div className="faq__map-tag">[ Google Maps · PDEU, Raisan, Gandhinagar ]</div>
          </div>
          <div className="faq__reach">
            {reach.map(r => (
              <div key={r.mode} className="faq__reach-card">
                <div className="faq__reach-mode">{r.mode}</div>
                <div className="faq__reach-place">{r.place}</div>
                <div className="faq__reach-dist">{r.dist}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
