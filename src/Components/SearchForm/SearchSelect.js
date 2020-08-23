import React from "react";

const SearchSelect = ({ optionsList, name }) => {
    return (
        <select name={name}>
            {optionsList.map((option, id) => (
                <option key={id} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SearchSelect;
