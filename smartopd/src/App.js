import "./App.css";
import { Footer } from "./components/Footer";

import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
