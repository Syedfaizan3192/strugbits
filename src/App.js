import logo from "./logo.svg";
import "./App.css";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import "../src/assets/scss/style.css";
import TestComponent from "./components/Test";
import DashboardLayout from "./Layouts/DashboardLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path={"/"} element={<HomePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
