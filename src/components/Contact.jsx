import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Contact = () => {
    return (
        <Box sx={{ height: "50vh" }}>
            <Typography
                gutterBottom
                sx={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    color: "#F67280",
                    margin: "auto",

                    textAlign: "center",
                }}
                variant="h5"
                color="#F67280"
            >
                Contact us
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Nunito",

                    fontSize: "1.1rem",
                    color: "#F67280",
                    margin: "auto",
                    textAlign: "center",
                }}
                variant="body2"
                color="text.secondary"
            >
                Have any questions about the way we function? Feel free to reach
                us out!
            </Typography>
            <Button
                sx={{
                    marginLeft: "48%",
                    marginTop: "2rem",
                }}
                color="secondary"
                variant="outlined"
                href="mailto:@gmail.com?subject=I'm%20interested%20in%20your%20product&body=Hello%2C%20I%20want%20to%20enquire%20about%3A%0D%0A"
            >
                Email
            </Button>
        </Box>
    );
};

export default Contact;
