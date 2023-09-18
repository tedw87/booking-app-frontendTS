import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomDetailsPage from "./pages/RoomDetailsPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import UserProfilePage from "./pages/UserProfilePage.tsx";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent.tsx";
import AddRoomPage from "./pages/AddRoomPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* pulbicly available routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/room-details" element={<RoomDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element="Page not exists 404" />
        {/* user protected routes */}
        <Route element={<ProtectedRoutesComponent userAuth={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/add-room" element={<AddRoomPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
