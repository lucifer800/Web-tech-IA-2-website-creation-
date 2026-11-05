import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SportsRail from './components/SportsRail';
import Schedule from './components/Schedule';
import Standings from './components/Standings';
import Legacy from './components/Legacy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Ticker />
      <Navbar />
      <Hero />
      <SportsRail />

      <main>
        <Schedule />
        <Standings />
        <Legacy />
      </main>

      <Footer />
    </div>
  );
}

export default App;