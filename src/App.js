import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./components/navigationbar/navigation-bar.component";
import Authentication from "./Routes/authentication/authentication.component";
import CheckOut from "./Routes/checkout/checkout.component";
import Shop from "./Routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
