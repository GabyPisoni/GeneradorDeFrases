import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Frase from "../src/components/Frase";
import Mensaje from "../src/components/Mensaje";


function App() {
  //State de frase
  const [frase, setFrase] = useState({});
  const [render, setRender] = useState(true);
  const consultarAPI = async () => {
    //Detiene la ejecucion del codigo hasta que api este completa y luego se lo pasa a api si esta listo.
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const texto = await api.json();
    setFrase(texto[0]);
    setRender(false);
  };
  
  
  return (
    <div className="cuerpo">
      <div className="container">
        <h1 style={{color:"#33FF61"}}>Frases de Breaking Bad</h1>
        {render ? <Mensaje /> : <Frase frase={frase} />}
      </div>

      <Button
        variant="contained"
        color="primary"
        style={{
          position: "relative",
          top: "70%",
          left: "50%",
          margin: "1%"
        }}
        onClick={consultarAPI}
      >
        Generar Frase
      </Button> 
    </div>
  );
}

export default App;
