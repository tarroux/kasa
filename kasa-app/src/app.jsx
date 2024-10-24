import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import './sass/app.scss';
import About from "./pages/about.jsx";
import Apartment from "./pages/apartment.jsx";
import Error from "./pages/error.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";


function App() {
  return (
    <>
    <Router>
      <div className="general-style">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<Apartment />} />
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );


}

export default App;
