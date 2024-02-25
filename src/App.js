import React, { useState, useEffect } from "react";
import "./App.scss";
import ConnectorCard from "./components/ConnectorCard/ConnectorCard.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  const [connectors, setConnectors] = useState([
    ...(JSON.parse(localStorage.getItem("connectors")) || []),
  ]);
  const [randomConnector, setRandomConnector] = useState(null);

  async function fetchConnectors() {
    try {
      const response = await fetch("db/db2.json");
      if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
      }
      const data = await response.json();
      localStorage.setItem("connectors", JSON.stringify(data));
      setConnectors(data);
    } catch (error) {
      console.error("Ошибка:", error.message);
      return [];
    }
  }

  const getRandomConnector = () => {
    const randomIndex =
      connectors.length && Math.floor(Math.random() * connectors.length);
    setRandomConnector(connectors[randomIndex]);
  };

  useEffect(() => {
    if (!connectors.length) {
      fetchConnectors();
      getRandomConnector();
    } else {
      getRandomConnector();
    }
  });

  const nextCard = () => {
    getRandomConnector();
  };

  const removeConnector = () => {
    let id = randomConnector && randomConnector.id;
    const updatedConnectors = connectors.filter(
      (connector) => connector.id !== id
    );
    setConnectors(updatedConnectors);
    const localStorageData = JSON.parse(localStorage.getItem("connectors"));
    const updatedLocalStorageData = localStorageData.filter(
      (connector) => connector.id !== id
    );
    localStorage.setItem("connectors", JSON.stringify(updatedLocalStorageData));
  };

  return (
    <div className="App wrapper">
      <Header connectors={connectors} />
      <main className="page">
        <section id="connector-details">
          {randomConnector && <ConnectorCard connector={randomConnector} />}
          <div className="options">
            <button
              onClick={() => {
                nextCard();
                removeConnector();
              }}
              className="option"
            >
              Next word
            </button>
            <button
              onClick={() => {
                removeConnector();
                nextCard();
              }}
              className="option"
            >
              Delete this word
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
