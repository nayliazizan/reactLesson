function Search({searchTerm, handleSearch}) {
    return (
        <div>
            {/* 7. Label for the search input */}
            <label>Search: </label>
            {/* 8. Input field for the search term */}
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleSearch} // 9. Call handleSearch when input changes
            />
        </div>
    );
}

export default Search;