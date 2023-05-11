const Search = ({searchQuery, setSearchQuery, onSubmit}) => {

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
    }

    return(
        <form className="rounded position-relative" onSubmit={handleSubmit}>
            <input className="form-control ps-5 bg-light" type="search" placeholder="닉네임, 제목으로 검색"
                   aria-label="Search"
                    value={searchQuery}
                   onChange={handleInputChange}
            />
            <button
                className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                type="submit"><i className="bi bi-search fs-5"> </i></button>
        </form>
    );
}
export default Search;