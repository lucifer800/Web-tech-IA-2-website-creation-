import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Ticker />
      <Navbar />
      <Hero />

      <main>
        {/* Sports, Schedule, Standings, etc. — coming in future commits */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
