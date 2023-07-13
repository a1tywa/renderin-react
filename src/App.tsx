import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(true);
  }, 3000);
  // ADADAD
  return (
    <div>
      {isLoading ? (
        <h1>
          HELLO AIGERIM{" "}
          <img
            src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
            alt=""
          />
        </h1>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
