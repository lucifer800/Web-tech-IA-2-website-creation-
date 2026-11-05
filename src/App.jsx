import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PDEUSports from './pages/PDEUSports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdeu-sports" element={<PDEUSports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
