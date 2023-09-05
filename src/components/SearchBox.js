import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--red bg-lightest-blue"
            type="search" 
            placeholder="search robot"
            onChange={searchChange}  // onSearchChange() so the func gets called
            />
        </div>
    )
}

export default SearchBox;