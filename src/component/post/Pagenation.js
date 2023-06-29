const Pagenation = ({
                        currentPage,
                        setCurrentPage,
                        pageGroup,
                        setPageGroup,
                        lastPage,
                        postCount,
                        LIMIT,
                    }) => {

    const handlePageClick = (page) => {
        setCurrentPage(page);
        setPageGroup(Math.ceil(page / 5));
    };

    const handlePrevGroup =  () => {
        const newPageGroup = Math.max(pageGroup - 1, 1);
        const newPage = (newPageGroup - 1) * 5 + 1;
        setCurrentPage(newPage);
        setPageGroup(newPageGroup);
    };

    const handleNextGroup = () => {
        const newPageGroup = Math.min(pageGroup + 1, Math.ceil(lastPage / 5));
        const newPage = (newPageGroup - 1) * 5 + 1;
        setCurrentPage(newPage);
        setPageGroup(newPageGroup);
    };

    const renderPageButtons = () => {
        const buttons = [];
        const startPage = (pageGroup - 1) * 5 + 1;
        const endPage = Math.min(startPage + 4, lastPage);

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <li className={`page-item ${i === currentPage ? 'active' : ''}`} key={i}>
                    <button className="page-link" onClick={() => handlePageClick(i)}>
                        {i}
                    </button>
                </li>
            );
        }

        return buttons;
    };


    return(
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center m-0">
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handlePrevGroup}
                        disabled={pageGroup === 1}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {renderPageButtons()}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleNextGroup}
                        disabled={pageGroup === Math.ceil(postCount / (LIMIT * 5))}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Pagenation;