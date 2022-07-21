import React from 'react';
import "./serverErrorStyle.css"

const ServerError = () => {
    return (
        <div id="serverError">
            <div className="serverError">
                <div className="serverError-500">
                    <h3>Internal Server error!</h3>
                    <h1><span>5</span><span>0</span><span>0</span></h1>
                </div>
                <h2>Oops, something went wrong</h2>
            </div>
        </div>
    );
};

export default ServerError;