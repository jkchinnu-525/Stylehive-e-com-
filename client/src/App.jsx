import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Signup";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import TopBar from "./componenets/TopBar";
import Store from "./pages/Store";
import Cart from "./componenets/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Auth />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
