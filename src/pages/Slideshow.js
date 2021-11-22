import { useLocation } from "react-router-dom";
import Slides from "../components/Slide";

const Slideshow = ({ slideshow, setLocation }) => {
    setLocation(useLocation());

    return (
        <div>
            <Slides slideshow={slideshow} />
        </div>
    );
};

export default Slideshow;
