import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Dashboard from "./pages/admin/Dashboard";
import Heroes from "./pages/admin/Heroes";
import Careers from "./pages/admin/Careers";
import Login from "./pages/admin/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/admin" element={<Dashboard />}>
                    <Route path="/admin/heros" element={<Heroes />} />
                    <Route path="careers" element={<Careers />} />
                </Route>
                <Route path="/admin-login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
