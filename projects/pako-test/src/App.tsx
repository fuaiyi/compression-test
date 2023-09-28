import React from "react";
import { SeverityNumber } from "@opentelemetry/api-logs";

import "./App.css";
import { logger } from "./opentelemetry";

function App() {
  const upload = () => {
    for (let index = 0; index < 1; index++) {
      logger.emit({
        severityNumber: SeverityNumber.INFO,
        severityText: "INFO",
        body: "this is a log record body",
        attributes: { "log.type": "LogRecord" },
      });
    }
  };

  return (
    <div className="App">
      <button className="upload" onClick={upload}>
        upload 1000 datas
      </button>
    </div>
  );
}

export default App;
