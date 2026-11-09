import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section id="register" className="register">
      <div className="register__bg">'27</div>
      <div className="register__content">
        <div className="register__label">REGISTRATIONS OPEN · CONTINGENT ENTRIES</div>
        <h2 className="register__title">
          Bring your<br />university
        </h2>
        <div className="register__actions">
          <Link to="/register" className="register__cta register__cta--primary">Start registration →</Link>
          <a href="#" className="register__cta register__cta--outline">WhatsApp updates</a>
        </div>
      </div>
    </section>
  );
}

export default Register;
