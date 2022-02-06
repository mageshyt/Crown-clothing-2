import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ShopPage from "./components/Screen/ShopPage";
import Header from "./components/Home/Header";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
