import React from "react";

const Input = ({ setQuery, query }) => {
    return (
        <div className="input">
            <h1>
                Right now in{" "}
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="your location"
                    type="text"
                    autoFocus
                    value={query}
                />
            </h1>
        </div>
    );
};

export default Input;
