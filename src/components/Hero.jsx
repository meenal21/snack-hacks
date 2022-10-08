import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Nunito",
    },
    container: {
        textAlign: "center",
    },
    title: {
        color: "black",
        fontSize: "3rem",
        marginTop: 90,
        fontFamily: "Nunito",
    },
    colorText: {
        color: "#F67280",
        fontSize: "4rem",
    },
}));

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Don't waste food ever again! <br /> Welcome to <br />
                    <span className={classes.colorText}>
                        Food Bank
                        <br />
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
