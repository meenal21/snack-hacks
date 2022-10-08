import React from "react";
import { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import FoodBankIcon from "@mui/icons-material/FoodBank";

const Header = () => {
    const [value, setValue] = useState();
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <FoodBankIcon fontSize="large" />
                    <Tabs
                        sx={{ marginRight: "auto" }}
                        textColor="inherit"
                        value={value}
                        onChange={(e, value) => setValue(value)}
                        indicatorColor="white"
                    >
                        <Tab label="Home" />
                        <Tab label="Services" />
                        <Tab label="Contact" />
                        <Tab label="About" />
                    </Tabs>

                    <Button variant="contained">Login</Button>
                    <Button sx={{ marginLeft: 2 }} variant="contained">
                        Sign up
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;
