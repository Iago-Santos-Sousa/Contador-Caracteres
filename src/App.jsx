import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.scss";

function App() {
  const [inputText, setInputText] = useState("");
  const [characterLimit] = useState(30);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <form id="form">
      <div className="input-box">
        <div style={{ marginBottom: "15px" }}>
          <label className="input-label">Insira qualquer caractere</label>
        </div>
        <div>
          <input
            type="text"
            className={`input-1 ${
              inputText.length > characterLimit ? "warning" : ""
            }`}
            name="valueString"
            onChange={handleChange}
            value={inputText}
            maxLength={40}
          />
          <p style={{ textAlign: "center" }}>{inputText.length}</p>

          {inputText.length > characterLimit ? (
            <p style={{ maxWidth: "250px", textAlign: "justify" }}>
              Voçê ultrapassou o limite de 30 caracteres!
            </p>
          ) : null}

          {inputText.length > 0 ? (
            <p style={{ maxWidth: "250px", textAlign: "justify" }}>
              Lembre-se que espaços em branco também contam como caracteres!
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}

export default App;
