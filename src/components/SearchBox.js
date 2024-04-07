import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div>
            <input
                type='search'
                placeholder='search recipes'
                onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBox;
