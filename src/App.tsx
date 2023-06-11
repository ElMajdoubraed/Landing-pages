import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agency from "./pages/Agency";
import ComingSoon from "./pages/Coming-soon";
import Mobile from "./pages/Mobile";
import Portfolio from "./pages/Portfolio";
import Product from "./pages/Product";
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
