import React from "react";
import { useLocation } from "react-router-dom";

import Gallery from "../components/Gallery";

const Home = ({ setLocation }) => {
    setLocation(useLocation());

    return (
        <div>
            <Gallery />
        </div>
    );
};

export default Home;
