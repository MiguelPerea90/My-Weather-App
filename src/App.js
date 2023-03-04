import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from  "./App.module.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Ciudad from "./components/Ciudad/Ciudad";


const KEY = "4ae2636d8dfbdc3044bede63951a019b";


function App() {


  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(idCiudad) {
    let ciudad = cities.filter((city) => city.id === parseInt(idCiudad)); // [{...}]
    if (ciudad.length > 0) return ciudad[0];
    else return null;
  }

  return (
    <div className={styles.containeApp}>

      <Nav onSearch={onSearch} />  
      <Routes>
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/ciudad/:idCiudad" element={<Ciudad onFilter={onFilter} />} />
      </Routes>
      {/* <hr /> */}

    </div>
  );
}

export default App;



