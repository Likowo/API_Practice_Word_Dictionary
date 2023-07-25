import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //Declare state(s)
  const [word, setWord] = useState([]);
  const [input,setInput] = useState("")

  const getWord = async () => {
    // Use axios to get information from the API. Axios is a library that serves to create HTTP requests that are present externally.
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    );
    const infor = await response.data;
    // const arrayInfor = infor.map((getWord) => <li>{infor}</li>)
    console.log(infor);
    setWord(infor);
    console.log(word)
  };

  // useEffect to run getWord when component mounts
  // useEffect(() => {
  //   getWord();
  // }, [input]);

  // loaded function for when data is fetched by axios
  return (
    <div className="App">
      <div>
        <h1> Word Dictionary </h1>
      </div>
      <from action="">
        <input type="text" placeholder="Search Word" value={input} onChange={(e)=> {setInput(e.target.value)}} />
        <input type="submit" onClick={getWord} />
      </from>
      <ul>
           {word?.map((item)=>{
              return(
                <>
              <li>{item.meanings[0].definitions[0].definition}</li>
              <li>{item.meanings[0].synonyms.join(", ")}</li>
              </>
              )
                })}
      </ul>
                
            

    </div>
  );
}

export default App;
