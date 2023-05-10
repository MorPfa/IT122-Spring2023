import React, { useState, useEffect } from 'react';
import axios from "axios";
function Home() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('/api/items');
        setItems(response.data);
      }
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <a href={`/details/${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Home;