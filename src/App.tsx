import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
