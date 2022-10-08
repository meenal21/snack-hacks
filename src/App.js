import "./App.css";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <Contact />
        </div>
    );
}

export default App;
