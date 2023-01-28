import React from "react";
import images from "../constants/images";

const Photo = () => {
    return (
        <div className="photo">
            <img alt="profile photo" src={images.prof} />
        </div>
    );
};

export { Photo };
