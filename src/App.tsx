import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderComponent from "./components/HeaderComponent";

//publicly available pages
import HomePage from "./pages/HomePage.tsx";
import RoomDetailsPage from "./pages/RoomDetailsPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent.tsx";
import FooterComponent from "./components/FooterComponent.tsx";

//protected user pages
import UserProfilePage from "./pages/UserProfilePage.tsx";
import AddRoomPage from "./pages/AddRoomPage.tsx";
import RoomConfirmationPage from "./pages/RoomConfirmationPage.tsx";

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
        <Route element={<ProtectedRoutesComponent userAuth={true} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/add-room" element={<AddRoomPage />} />
          <Route path="/reserve-room" element={<RoomConfirmationPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
