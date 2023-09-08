import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
return (
<BrowserRouter>
  <HeaderComponent />
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
