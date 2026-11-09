import { Link } from 'react-router-dom';
import { footerColumns } from '../data/navigation';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Energy Cup <span className="footer__accent">'27</span>
          </Link>
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
              item.to
                ? <Link key={item.label} to={item.to} className="footer__link">{item.label}</Link>
                : <a key={item.label} href={item.href || '#'} className="footer__link">{item.label}</a>
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
