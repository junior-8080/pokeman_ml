import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
