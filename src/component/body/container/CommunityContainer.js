import Board from "../../post/Board";
import {useParams} from "react-router-dom";
import useFetchPosts from "../../post/useFetchPosts";
import React, {useEffect, useState} from "react";
import {LIMIT} from "../../../config/config";
import Pagenation from "../../post/Pagenation";
import Search from "../../post/Search";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const CommunityContainer = () => {
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [submittedSearchQuery, setSubmittedSearchQuery] = useState("");
    const [sortType, setSortType] = useState("createdAt")
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [posts, postCount] = useFetchPosts(currentPage, LIMIT, category, sortType, submittedSearchQuery, startDate, endDate);
    const lastPage = Math.ceil(postCount / LIMIT);
    const [showDatePickerWrap, setShowDatePickerWrap] = useState(false);

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

    const handleSortButtonClick = (sortType) =>{
        setSortType(sortType);
        setShowDatePickerWrap(true);
        setStartDate(new Date());
        setEndDate(new Date());
    }
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
                                <div className="d-flex flex-column gap-1">
                                    <div className="d-flex justify-content-between" style={{width : "150px"}}>
                                        <button className="btn btn-primary btn-xs" onClick={() => handleSortButtonClick('createdAt')}>최신</button>
                                        <button className="btn btn-success btn-xs" onClick={() => handleSortButtonClick('likeCount')}>인기</button>
                                        <button className="btn btn-warning btn-xs" onClick={() => handleSortButtonClick('viewCount')}>조회</button>
                                    </div>
                                    {showDatePickerWrap && (
                                        <div className="d-flex">
                                            <div style={{ width: "70px" }} className="datePickerWrap">
                                                <DatePicker
                                                    locale={ko}
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                />
                                            </div>
                                            <div>
                                                ~
                                            </div>
                                            <div style={{ width: "70px" }} className="datePickerWrap">
                                                <DatePicker
                                                    locale={ko}
                                                    selected={endDate}
                                                    onChange={(date) => setEndDate(date)}
                                                />
                                            </div>
                                        </div>
                                    )}
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