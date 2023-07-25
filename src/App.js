import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //Declare state(s)
  const [word, setWord] = useState({});

  const getWord = async () => {
    // Use axios to get information from the API. Axios is a library that serves to create HTTP requests that are present externally.
    const response = await axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en/man"
    );
    const infor = await response.data;
    console.log(infor);
    setWord(infor);
  };

  // useEffect to run getWord when component mounts
  useEffect(() => {
    getWord();
  }, []);

  // loaded function for when data is fetched by axios
  return (
    <div className="App">
      <div>
        <h1> Word Dictionary </h1>
      </div>
      <from action="">
        <input type="text" placeholder="Seacrh Word" />
        <input type="submit" />
      </from>
    </div>
  );
}

export default App;
