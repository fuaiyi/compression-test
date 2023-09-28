import React from "react";
import { SeverityNumber } from "@opentelemetry/api-logs";

import { logger } from "./opentelemetry";

import "./App.css";

function App() {
  const upload = () => {
    for (let index = 0; index < 1000; index++) {
      const attributes = {
        "exception.type": "js",
        "exception.fingerprint":
          "anMtVHlwZUVycm9yLVVuY2F1Z2h0IFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiB1bmRlZmluZWQgKHJlYWRpbmcgJ2InKS1UeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnRpZXMgb2YgdW5kZWZpbmVkIChyZWFkaW5nICdiJykKICAgIGF0IEhUTUxCdXR0b25FbGVtZW50Ljxhbm9ueW1vdXM+IChodHRwOi8vbG9jYWxob3N0OjMwMDEvaW5kZXgudHM6Mjg6MTcp",
        "exception.message": "Uncaught TypeError: Cannot read properties of undefined (reading 'b')",
        "exception.fileName": "http://localhost:3001/index.ts",
        "exception.stacktrace":
          "TypeError: Cannot read properties of undefined (reading 'b')\n    at HTMLButtonElement.<anonymous> (http://localhost:3001/index.ts:28:17)",
        "exception.line": "28",
        "exception.column": "17",
        "exception.name": "TypeError",
        "exception.timestamp": "1695893249267100200",
      };
      logger.emit({
        severityNumber: SeverityNumber.ERROR,
        severityText: "ERROR",
        body: JSON.stringify(attributes),
        attributes: attributes,
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
