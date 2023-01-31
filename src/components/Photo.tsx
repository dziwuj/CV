import React from "react";
import images from "../constants/images";

const Photo = () => {
    return (
        <div className="photo">
            <div style={{ backgroundImage: `url(${images.prof})` }} />
        </div>
    );
};

export { Photo };
