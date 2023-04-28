import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../animations/chameleon.json";

export const Loader = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                position: "fixed",
                zIndex: "100",
                top: "0",
                left: "0",
                background: "#d4d4d4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: "82vw", height: "80vh" }}
            />
        </div>
    );
};
