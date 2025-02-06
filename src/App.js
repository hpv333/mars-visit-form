import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultiStageForm from "./pages/MultiStageForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStageForm />} />
      </Routes>
    </Router>
  );
}

export default App;
