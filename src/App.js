import Brands from "./components/Brands";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Arrivals from "./components/Arrivals";
import Sale from "./components/Sale";
import Favourites from "./components/Favourites";
import MobileApp from "./components/MobileApp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="no-scrollbar">
      <NavBar />
      <Hero />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourites />
      <MobileApp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
