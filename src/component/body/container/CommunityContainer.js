import Board from "../../post/Board";
import {useParams} from "react-router-dom";
import useFetchPosts from "../../post/useFetchPosts";
import {useState} from "react";
import {LIMIT} from "../../../config/config";
import Pagenation from "../../post/Pagenation";

const CommunityContainer = () => {
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const [posts, postCount] = useFetchPosts(currentPage, LIMIT, category, 'createdAt');
    const lastPage = Math.ceil(postCount / LIMIT);

    return(
        <main>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 vstack gap-4 mx-auto">
                        <Board posts={posts}/>
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
        </main>
    );
}
export default CommunityContainer;