import Brands from "./components/Brands";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Arrivals from "./components/Arrivals";
import Sale from "./components/Sale";
import Favourites from "./components/Favourites";
import MobileApp from "./components/MobileApp";

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
    </div>
  );
}

export default App;
