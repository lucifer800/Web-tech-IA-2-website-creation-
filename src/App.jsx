import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Ticker />
      <Navbar />

      <main>
        {/* Hero, Sports, Schedule, Standings, etc. — coming in future commits */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
