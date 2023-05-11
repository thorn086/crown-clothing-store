import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./components/navigationbar/navigation-bar.component";
import SignIn from "./Routes/signin/signin.component";

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop Page</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
