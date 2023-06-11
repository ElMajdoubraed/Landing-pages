import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Agency, ComingSoon, Mobile, Portfolio, Product } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
