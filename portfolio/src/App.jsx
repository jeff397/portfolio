import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import OffresPack from "./components/OffresPack/OffresPack";
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
            <Helmet>
              <title>Delmotte Jean-François | Développeur Web</title>
              <meta
                name="description"
                content="Portfolio de Delmotte Jean-François, développeur web freelance spécialisé en React, SEO et sites modernes."
              />
              <meta
                property="og:title"
                content="Delmotte Jean-François | Développeur Web"
              />
              <meta
                property="og:description"
                content="Découvrez le portfolio de Delmotte Jean-François, développeur web basé en France."
              />
              <meta
                property="og:url"
                content="https://portfolio-8awh.vercel.app"
              />

              {/* ✅ Données structurées JSON-LD */}
              <script type="application/ld+json">
                {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Delmotte Jean-François",
        "jobTitle": "Développeur Web",
        "url": "https://portfolio-8awh.vercel.app",
        "sameAs": [
          "https://github.com/jeff397"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR"
        }
      }
    `}
              </script>
            </Helmet>

            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <OffresPack />
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
