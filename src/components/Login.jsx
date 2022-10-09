import {
    Avatar,
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    Link,
} from "@mui/material";

import React from "react";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto",
        fontFamily: "Nunito",
    };

    return (
        <Grid sx={{ paddingTop: "5rem" }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar sx={{ backgroundColor: "#F67280" }}>
                        <LoginIcon />
                    </Avatar>
                    <h2>Login </h2>
                </Grid>
                <form>
                    <TextField
                        label="Username"
                        placeholder="Enter username"
                        fullWidth
                        required
                    />
                    <TextField
                        sx={{ marginTop: "5%" }}
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                        fullWidth
                        required
                    />
                    <FormControlLabel
                        control={<Checkbox name="checked8" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        sx={{ marginBottom: "5%" }}
                        type="submit"
                        color="secondary"
                        variant="contained"
                        fullWidth
                    >
                        Login
                    </Button>
                    <Typography>
                        <Link href="#">Forgot password?</Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
};

export default Login;
