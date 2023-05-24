import {useParams} from "react-router-dom";
import useFetchPost from "../../post/useFetchPost";
import useIncrementViewCount from "../../post/useIncrementViewCount";
import Loading from "./Loading";
import LikeButton from "../../post/LikeButton";
import DisplayCreatedAt from "../../../formats/DisplayCreatedAt";
import React from "react";

const ReadContainer = () => {
    const { postId } = useParams();
    const [post, error] = useFetchPost(postId);

    if (!post) {
        return <Loading />;
    }

    return(
        <main>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 vstack gap-4 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex align-items-center justify-content-between flex-wrap post-header">
                                    <div>
                                        <h1 className="card-title h4">{post.title}</h1>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="username" style={{textAlign: "right"}}><span>{post.username}</span></div>
                                        <div className="createdAt" style={{textAlign: "right"}}><span><DisplayCreatedAt createdAt={post.createdAt} /> </span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                            </div>
                            <div className="card-footer">
                                <ul className="nav nav-stack py-3 small">
                                    <li className="nav-item">
                                        <i className="bi bi-eye-fill"></i> 조회수 ({post.viewCount})
                                    </li>
                                    <li className="nav-item">
                                        <LikeButton id={post.id} isPost={true} likeCount={post.likeCount}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ReadContainer;