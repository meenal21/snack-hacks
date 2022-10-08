import {
    Avatar,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const Signup = () => {
    const paperStyle = {
        padding: 20,
        height: "80vh",
        width: 280,
        margin: "20px auto",
        fontFamily: "Nunito",
    };

    return (
        <Grid sx={{ marginTop: "6%" }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar sx={{ backgroundColor: "#F67280" }}>
                        <HowToRegIcon />
                    </Avatar>
                    <h2>Sign up</h2>
                    <Typography sx={{ fontFamily: "Nunito" }} variant="caption">
                        Fill the details to create account
                    </Typography>
                </Grid>
                <form>
                    <TextField
                        fullWidth
                        label="Name"
                        placeholder="Enter name"
                        required
                    />
                    <TextField
                        sx={{ marginTop: "3%" }}
                        fullWidth
                        label="Phone number"
                        placeholder="Enter 10 digit phone number"
                        required
                    />
                    <TextField
                        sx={{ marginTop: "3%" }}
                        fullWidth
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                        required
                    />
                    <TextField
                        sx={{ marginTop: "3%" }}
                        fullWidth
                        label="Confirm password"
                        placeholder="Re-enter password"
                        type="password"
                        required
                    />
                    <Button
                        sx={{ marginTop: "10%" }}
                        type="submit"
                        color="secondary"
                        variant="contained"
                        fullWidth
                        required
                    >
                        Create account
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default Signup;
