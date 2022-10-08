import "./App.css";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
