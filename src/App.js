import "./App.css";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import DrawerAppBar from "./components/ProviderPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <Services />
                                <Contact />
                            </>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/providerpage" element={<DrawerAppBar />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
