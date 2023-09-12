import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomDetailsPage from "./pages/RoomDetailsPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room-details" element={<RoomDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
