import React from "react";

const SearchField = ({ handleChangeSearchValue, searchValue }) => {
    return (
        <input
            type='text'
            onChange={handleChangeSearchValue}
            value={searchValue}
        />
    );
};

export default SearchField;
