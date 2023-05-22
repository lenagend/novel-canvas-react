import Board from "../../post/Board";
import {useParams} from "react-router-dom";
import useFetchPosts from "../../post/useFetchPosts";
import React, {useEffect, useState} from "react";
import {LIMIT} from "../../../config/config";
import Pagenation from "../../post/Pagenation";
import Search from "../../post/Search";

const CommunityContainer = () => {
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [submittedSearchQuery, setSubmittedSearchQuery] = useState("");
    const [sortType, setSortType] = useState("createdAt")
    const [posts, postCount] = useFetchPosts(currentPage, LIMIT, category, sortType, submittedSearchQuery);
    const lastPage = Math.ceil(postCount / LIMIT);

    const handleSubmitSearch = (query) => {
        setSubmittedSearchQuery(query);
        setCurrentPage(1);
    };

    useEffect(() => {
        setSearchQuery("");
        setSubmittedSearchQuery("");
        setCurrentPage(1);
        setPageGroup(1);
    }, [category, sortType]);

    return(
        <main>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 vstack gap-4 mx-auto">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div>
                                    <h1 className="card-title h4">{category}</h1>
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-xs" onClick={() => setSortType('createdAt')}>최신</button>&nbsp;
                                    <button className="btn btn-success btn-xs" onClick={() => setSortType('likeCount')}>인기</button>&nbsp;
                                    <button className="btn btn-warning btn-xs" onClick={() => setSortType('viewCount')}>조회</button>
                                </div>
                            </div>
                            <div className="card-body">
                                 <Board posts={posts}/>
                            </div>
                            <div className="card-footer">
                                <div className=" mx-auto p-3">
                                    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSubmit={handleSubmitSearch}/>
                                </div>
                                <Pagenation
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    pageGroup={pageGroup}
                                    setPageGroup={setPageGroup}
                                    lastPage={lastPage}
                                    postCount={postCount}
                                    LIMIT={LIMIT}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default CommunityContainer;