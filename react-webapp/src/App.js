import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchCoins = async () => {
      try {
        // Make GET request to fetch coin data from the API
        const response = await axios.get("http://localhost:3001/coins");

        // Update the component state with the fetched data
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchCoins function when the component mounts
    fetchCoins();
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Docker Fullstack Development</p>
        <a
          className="App-link"
          href="https://t.me/huancapital"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>

        {/* Display the list of coins */}
        <div>
          <h2>List of Coins:</h2>
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol})
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
