import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
