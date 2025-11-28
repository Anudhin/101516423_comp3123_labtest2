import React from "react";

function WeatherCard({ data }) {
  const { name, main, weather, wind, sys, dt } = data || {};

  const condition = weather && weather[0] ? weather[0] : null;


  const iconUrl = condition
    ? `http://openweathermap.org/img/wn/${condition.icon}@2x.png`
    : "";

 
  const date = dt ? new Date(dt * 1000) : new Date();
  const dateLabel = date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="weather-card">
      {/* LEFT SIDE: main info */}
      <div className="weather-left">
        <p className="weather-day">{dateLabel}</p>
        <p className="weather-location">
          {name}, {sys?.country}
        </p>

        <div className="weather-temp-block">
          <p className="weather-temp">
            {Math.round(main.temp)}°C
          </p>
          <p className="weather-condition">
            {condition?.main} – {condition?.description}
          </p>
        </div>

        {iconUrl && (
          <img
            src={iconUrl}
            alt={condition?.description}
            className="weather-icon-main"
          />
        )}
      </div>

      {/* RIGHT SIDE: details */}
      <div className="weather-right">
        <h2 className="details-title">Today&apos;s Details</h2>
        <div className="details-grid">
          <div className="detail-row">
            <span>Feels like</span>
            <span>{Math.round(main.feels_like)}°C</span>
          </div>
          <div className="detail-row">
            <span>Min temp</span>
            <span>{Math.round(main.temp_min)}°C</span>
          </div>
          <div className="detail-row">
            <span>Max temp</span>
            <span>{Math.round(main.temp_max)}°C</span>
          </div>
          <div className="detail-row">
            <span>Humidity</span>
            <span>{main.humidity}%</span>
          </div>
          <div className="detail-row">
            <span>Pressure</span>
            <span>{main.pressure} hPa</span>
          </div>
          <div className="detail-row">
            <span>Wind speed</span>
            <span>{wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
