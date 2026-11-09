import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PDEUSports from './pages/PDEUSports';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdeu-sports" element={<PDEUSports />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
