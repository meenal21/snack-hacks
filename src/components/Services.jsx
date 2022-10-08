import React from "react";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";

const Services = () => {
    return (
        <>
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
                Services
            </Typography>
            <Box
                width="600px"
                sx={{
                    marginTop: "25rem",
                    marginBottom: "5rem",
                    margin: "20px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",

                    justifyContent: "center",
                    alignItems: "center",

                    padding: "20px",
                }}
            >
                <Card id="services">
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://source.unsplash.com/random"
                        alt="donate food"
                    />
                    <CardContent>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",
                                fontWeight: "bold",
                                fontSize: "2rem",
                                color: "#F67280",
                            }}
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            How to donate?
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",

                                fontSize: "1.1rem",
                            }}
                            variant="body2"
                            color="text.secondary"
                        >
                            Insert feature description here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Try now</Button>
                    </CardActions>
                </Card>

                <Card sx={{ margin: "auto" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://source.unsplash.com/random"
                        alt="donate food"
                    />
                    <CardContent>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",
                                fontWeight: "bold",
                                fontSize: "2rem",
                                color: "#F67280",
                            }}
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            Food info..
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",

                                fontSize: "1.1rem",
                            }}
                            variant="body2"
                            color="text.secondary"
                        >
                            Insert feature description here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Find</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
};

export default Services;
