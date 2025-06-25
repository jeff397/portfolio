import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CV from "./pages/cv";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

export default App;
