// components/Loader.jsx
import React from "react";
// import "./Loader.css";

const Loader = ({ fullPage = true }) => {
    return (
        <div className={`loader-container ${fullPage ? "full-page" : "inline"}`}>
            <div className="loader loader_bubble"></div>
        </div>
    );
};

export default Loader;