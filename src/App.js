import { useEffect, useState } from "react";
import "./App.css";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);

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

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) key = "rock";
    else if (value === 2) key = "pop";
    else if (value === 3) key = "jazz";
    else if (value === 4) key = "blues";

    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateData();
    generateAllSongsData();
  }, []);

  useEffect(() => {
    generateSongsData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="sectionWrapper">
        <Section
          data={topAlbumsData}
          type="album"
          title="Top Albums"
          filteredDataValues={topAlbumsData}
        />
        <Section
          data={newAlbumsData}
          type="album"
          title="New Albums"
          filteredDataValues={newAlbumsData}
        />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          value={value}
          handleChange={handleChange}
          filteredDataValues={filteredDataValues}
        />
      </div>
    </div>
  );
}

export default App;
