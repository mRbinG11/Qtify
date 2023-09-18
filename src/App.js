import { useEffect, useState } from "react";
import "./App.css";
import { fetchTopAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div>
        <Section data={topAlbumsData} title="Top Albums" />
      </div>
    </div>
  );
}

export default App;
