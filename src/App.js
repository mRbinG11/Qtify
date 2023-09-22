import { useEffect, useState } from "react";
import "./App.css";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const generateData = async () => {
    try {
      const data1 = await fetchTopAlbums();
      setTopAlbumsData(data1);
      const data2 = await fetchNewAlbums();
      setNewAlbumsData(data2);
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
      <div className="sectionWrapper">
        <Section data={topAlbumsData} title="Top Albums" />
      </div>
      <div className="sectionWrapper">
        <Section data={newAlbumsData} title="New Albums" />
      </div>
    </div>
  );
}

export default App;
