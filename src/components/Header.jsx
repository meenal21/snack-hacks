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
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <FoodBankIcon fontSize="large" />
                    {isMatch ? (
                        <>
                            <Typography
                                sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}
                            >
                                Food Bank
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
                                {pages.map((page, index) => (
                                    <Tab key={index} label={page} />
                                ))}
                            </Tabs>

                            <Button variant="contained">Login</Button>
                            <Button sx={{ marginLeft: 2 }} variant="contained">
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
