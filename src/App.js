import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="mainbox">
          <NavBar />
          <LandingPage />
          <AboutUs />
          <Offer />
          <Footer />
        </div>

      </header>
    </div>
  );
}

export default App;
