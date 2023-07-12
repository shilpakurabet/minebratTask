/** @format */

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import CitiesList from "./components/CitiesList";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<List />} />
          <Route exact path="/cities-list" element={<CitiesList />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
