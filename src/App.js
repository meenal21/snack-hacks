import "./App.css";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import DrawerAppBar from "./components/ProviderPage";
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PublicFoodCheck from "./components/publicFoodCheck";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: "Nunito",
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                    <Route path="/publicFoodCheck" element={<PublicFoodCheck />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
