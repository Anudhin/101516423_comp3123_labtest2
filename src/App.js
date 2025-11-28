import React, { useState } from "react";
import { fetchWeatherByCity } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError("City not found or API error.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Weather Forecast</h1>

      {/* Search Form */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading */}
      {loading && <p className="msg">Loading...</p>}

      {/* Error */}
      {error && <p className="msg error">{error}</p>}

      {/* Weather UI */}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
