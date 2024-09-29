import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import { AppProvider } from "./AppContext/AppContext";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </AppProvider>
  );
}

export default App;
