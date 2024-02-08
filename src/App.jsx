import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicePage from "./pages/ServicePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/services" element={<ServicePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
