import React, { useState } from "react";

function Semaforo() {
  const [luz, setluz] = useState("");

  const luces = ["Roja", "Amarilla", "Verde"];
  const lucesAleatorias = Math.floor(Math.random() * luces.length);
  const luzAleatoria =luces [(lucesAleatorias)];

  const cambiarLuz = () => {
    setluz(luzAleatoria);
  };

  return (
    <>
    <div>
    <button onClick = {cambiarLuz}>Semaforo</button>
    {luz &&<h1> La luz del semáforo ahora es {luz}.</h1>}
  </div>
    
</>
    );
}

export default Semaforo;
