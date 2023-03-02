/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import { useState, useEffect } from 'react';
import MyContext from './context';
import SideBar from './SideBar/SideBar';
import Drinks from './Drinks/Drinks';

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const BASE2_URL = 'http://localhost:8000/categories';
  const BASE_URL = 'http://localhost:8000/drinks';
  const API_KEY = '3';
  useEffect(() => {
    fetch(`${BASE_URL}?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setData([...res]));
    fetch(`${BASE2_URL}?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setData2([...res]));
  }, []);
  return (
    <MyContext.Provider value={{ data, data2 }}>
      <div className="app__main">
        <SideBar />
        <Drinks />
      </div>
    </MyContext.Provider>
  );
}
export default App;
