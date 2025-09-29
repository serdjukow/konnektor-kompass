import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useServerData = () => {
  const [connectors, setConnectors] = useState([]);

  console.log(connectors)

  async function fetchConnectors() {
    try {
      const response = await fetch("./db/db.json");
      if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
      }
      const data = await response.json();
      const newDate = data.map((el) => {
        return {
          ...el,
          id: uuidv4(),
          read: false,
          learned: false,
        };
      });
      setConnectors(newDate);
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  }
  fetchConnectors();

  
};

export default useServerData;
