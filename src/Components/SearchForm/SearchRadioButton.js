import React from "react";

const SearchRadioButton = ({ label, value, name }) => {
    return (
        <div >
            <input
                name={name}
                id={name + value}
                value={value}
                type='radio'
            />
            <label htmlFor={name + value}>{label}</label>
        </div>
    );
};

export default SearchRadioButton;
