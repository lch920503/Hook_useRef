import "./App.css";
import { useRef, useState } from "react";

function App() {
  const textRef = useRef();
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const handleFocus = () => {
    console.log("textRef", textRef);
    textRef.current.focus();
  };

  return (
    <>
      <h1>UseRef</h1>
      <div>
        <input
          type="text"
          placeholder="input"
          ref={textRef}
          value={text}
          onChange={onChangeText}
        />
        <button onClick={handleFocus}>클릭!</button>
      </div>
      <p>{text}</p>
    </>
  );
}

export default App;
