import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Favorites from './components/Favorites';
import RegionFinder from './components/RegionFinder';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (region) => {
    setFavorites(fav => {
      const isFavorite = fav.includes(region);
      if (isFavorite) {
        // 이미 즐겨찾기에 있으면 제거
        return fav.filter(f => f !== region);
      } else {
        // 즐겨찾기에 없으면 추가
        return [...fav, region];
      }
    });
  };


  const clearFavorites = () => {
    // 즐겨찾기 초기화하기
    setFavorites([]);
  };


  return (
    <div className="app-container">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/regions" element={<RegionFinder toggleFavorite={toggleFavorite} favorites={favorites} />} />
              <Route path="/favorites" element={<Favorites toggleFavorite={toggleFavorite} favorites={favorites} clearFavorites={clearFavorites} />} />
            </Routes>
          </Layout>
    </div>
  );
}

export default App;
