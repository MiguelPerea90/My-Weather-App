import React from "react";
import styles from "./About.module.css"

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Sobre Mí</h1>
      <p>Hola soy José Miguel Peréa, estudiante del Bootcamp de programacion de Henry de la cohorte 32C.</p>
      <p>Actualmente estoy cursando mi carrera y esta es mi primera app, las tecnologias que implemente fueron Javascript, React y CSS puro.</p>
      Estoy muy emocionado porque me gusta la programación, disfruto codear y espero con ancias encontrar mi primer empleo como Desarrollador.
    </div>
  );
}