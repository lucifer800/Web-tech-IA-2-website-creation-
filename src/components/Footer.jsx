import { footerColumns } from '../data/navigation';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            Energy Cup <span className="footer__accent">'27</span>
          </div>
          <p className="footer__address">
            Sports Committee, OSAIL<br />
            Pandit Deendayal Energy University<br />
            Raisan, Gandhinagar, Gujarat
          </p>
        </div>

        {footerColumns.map(col => (
          <div key={col.heading} className="footer__col">
            <div className="footer__heading">{col.heading}</div>
            {col.items.map(item => (
              <a key={item} href="#" className="footer__link">{item}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <span>© 2027 SPORTS PDEU</span>
        <span>LEARN · PLAY · WIN</span>
      </div>
    </footer>
  );
}

export default Footer;
