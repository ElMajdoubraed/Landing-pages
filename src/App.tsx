import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agency from "./pages/Agency";
import ComingSoon from "./pages/Coming-soon";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/agency" element={<Agency />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
