import React from "react";
import { useParams } from "react-router-dom"; //  Esto es un hook de param y es un objeto
// podemos acceder a Locatino, histoty que ahora es navigate y params
import styles from "./Ciudad.module.css"

// localhost:3000/ciudad/111
// localhost:3000/ciudad/222
// localhost:3000/ciudad/333
// http://localhost:3000/ciudad/4164138

export default function Ciudad({ onFilter }) {
  
  let { idCiudad } = useParams(); // "4164138"  // Comó es un objeto lo destructuro con la 
  // propiedad id ciudad que fue como la dedfini en el App. <Route path="/ciudad/:idCiudad"
  // console.log("soy el id", typeof idCiudad);
  
  let city = onFilter(idCiudad); // --> SI EXISTE LA CIUDAD ? {name: "Miami", temp: ....} : null
  // console.log(city)
  if (city) {
    return (
      <div className={styles.containerBig}>

        <div className={styles.container}>

          <h2 className={styles.title}> {city.name} </h2>
          <div className={styles.info}>
            <span>Temperatura - {city.temp}° </span>
            <span>Clima - {city.weather}</span>
            <span>Cantidad de nubes: {city.clouds}</span>
            <span>Coords: {city.latitud}º : {city.longitud}º</span>
          </div>

        </div>

      </div>
    );
  } else {
    return <div>Sin Ciudades</div>;
  }
}
