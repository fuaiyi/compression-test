import React from "react";

function App() {
  const upload = () => {
    console.log("upload 1000 datas");
  };

  return (
    <div className="App" onClick={upload}>
      upload 1000 datas
    </div>
  );
}

export default App;
