import React from "react";

const Input = ({ setQuerry }) => {
    return (
        <div className="input">
            <h1>
                Right now in{" "}
                <input
                    onChange={(e) => setQuerry(e.target.value)}
                    placeholder="your location"
                    type="text"
                    autoFocus
                />
            </h1>
        </div>
    );
};

export default Input;
