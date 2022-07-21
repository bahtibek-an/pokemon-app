import React from 'react';
import {Oval} from "react-loader-spinner";

const Loader = () => {
    return (
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={5}
                strokeWidthSecondary={1}
                color="white"
                secondaryColor="white"
            />
        </div>
    );
};

export default Loader;