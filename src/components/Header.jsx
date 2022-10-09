import React from "react";
import { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import DrawerHead from "./DrawerHead";

const pages = ["Home", "Services", "Contact", "About"];

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#F67280  " }}>
                <Toolbar>
                    <FoodBankIcon fontSize="large" />
                    {isMatch ? (
                        <>
                            <Typography
                                sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}
                            >
                                Food Share
                            </Typography>
                            <DrawerHead />
                        </>
                    ) : (
                        <>
                            <Tabs
                                sx={{ marginRight: "auto" }}
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                indicatorColor="white"
                            >
                                <Tab key={0} label="Home" href="/" />
                                <Tab key={1} label="Services" />
                                <Tab key={2} label="Contact" />
                                <Tab key={3} label="About" />
                            </Tabs>

                            <Button
                                color="secondary"
                                variant="outlined"
                                href="/login"
                            >
                                Login
                            </Button>
                            <Button
                                sx={{ marginLeft: 2 }}
                                color="secondary"
                                variant="outlined"
                                href="/signup"
                            >
                                Sign up
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
