import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [planet, setPlanet] = useState('')

  async function handleSubmit() {

    const response = await fetch(`https://my-json-server.typicode.com/srsantosdev/planetsapi-fake/planets/${planet}`);
    const data = await response.json();

    setPlanet(data);
  }
  return (
    <>
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <div>
          <input type="text" placeholder="Nome do planeta" onChange={event => setPlanet(event.target.value)} />
          <button onClick={handleSubmit}>Buscar</button>
        </div>
      </header>
      <main>
        <h1>Planeta {planet.name}</h1>
        <p>Temperatura: <span>{planet.temperature}</span></p>
        <p>Raio: <span>{planet.radius}</span></p>
        <p>Diametro: <span>{planet.diameter}</span></p>
        <p>Duração da rotação: <span>{planet.rotation_duration}</span></p>
        <p>Distância do Sol: <span>{planet.sun_distance}</span></p>
      </main>
    </>
  );
}

export default App;
