import React, { useState, useEffect } from 'react';
import DataList from './components/DataList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://your-server-url/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <SearchBar />
      <SortOptions />
      <DataList data={data} />
      <Pagination />
    </div>
  );
}

export default App;