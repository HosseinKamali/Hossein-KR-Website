import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { AppProvider } from "./AppContext/AppContext";
import Login from "./components/login/Login";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </AppProvider>
  );
}

export default App;
