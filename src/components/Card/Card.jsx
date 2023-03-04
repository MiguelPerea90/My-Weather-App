import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {

  // id sería el ID de la ciudad, por ejemplo "223" -- Miami // "114" Orlando
 
  // El id lo tengo por parametro, porque me llega desde las Cards.
  // Cada vez que le haga click al nombre de una ciudad, por el id que 
  // tiene cada una me va a llevar a la URL /ciudad/id, por lo tanto iremos
  // a la descripcion de cada ciudad
    return (
      <div className={styles.card}>

        <div id="closeIcon" className="row">
            <button onClick={onClose} className={styles.close}>X</button>
        </div>

        <div className="card-body">
          <Link to={`/ciudad/${id}`} className={styles.linkTitle}> 
            <h5 className={styles.cardTitle}>{name}</h5>
          </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <span>Min - </span>
              <span>{min}°</span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <span>Max - </span>
              <span>{max}°</span>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>

      </div>
    );
};