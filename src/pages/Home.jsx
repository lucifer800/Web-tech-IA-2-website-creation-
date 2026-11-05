import Ticker from '../components/Ticker';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SportsRail from '../components/SportsRail';
import Schedule from '../components/Schedule';
import Standings from '../components/Standings';
import Legacy from '../components/Legacy';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';
import Register from '../components/Register';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Ticker />
      <Navbar />
      <Hero />
      <SportsRail />
      <main>
        <Schedule />
        <Standings />
        <Legacy />
        <Partners />
        <FAQ />
        <Register />
      </main>
      <Footer />
    </>
  );
}

export default Home;
