import React, { useState } from "react";

const Input = ({ setQuerry, description }) => {
    return (
        <div className="input">
            <h1>
                Right now in{" "}
                <input
                    onChange={(e) => setQuerry(e.target.value)}
                    type="text"
                    autoFocus
                />
                its {description}
            </h1>
        </div>
    );
};

export default Input;
