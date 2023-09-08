import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import MusicCard from "./components/MusicCard/MusicCard";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="musicCards">
        <MusicCard />
      </div>
    </div>
  );
}

export default App;
