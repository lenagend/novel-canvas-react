import DisplayCreatedAt from "../../formats/DisplayCreatedAt";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import EllipsisText from "../../formats/EllipsisText";
import useIncrementViewCount from "./useIncrementViewCount";
import axios from "axios";
import {API_BASE_URL} from "../../config/config";

const Board = ( {posts} ) => {
    const navigate = useNavigate();

    const handleTitleButtonClick = (e, postId) => {
        e.preventDefault();
        const incrementViewCount = async () => {
            const uniqueId = localStorage.getItem('uniqueId');

            try {
                await axios.post(`${API_BASE_URL}/api/posts/${postId}/view`, null, {
                    params: {
                        uniqueId: uniqueId
                    }
                });
            } catch (error) {
                console.error("Error incrementing view count", error);
            }

            navigate(`/read/${postId}`);
        };
        incrementViewCount();
    };

    return(
            <table className="table">
                <thead>
                <tr className="text-center">
                    <th scope="col" style={{ width: "80px" }}>
                    </th>
                    <th scope="col" style={{ width: "auto", textAlign: "left"}}>

                    </th>
                    <th scope="col" style={{ width: "110px" }}>
                        <i className="bi bi-pencil"></i> <i className="bi bi-clock"></i>
                    </th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <React.Fragment key={post.id}>
                        <tr>
                            <td rowSpan={2}>
                                <img style={{width: "60px", height: "90px"}} src="/assets/images/bg/01.jpg" alt="표지"/>
                            </td>
                            <td className="post border-bottom-0">
                                <a href="#!" onClick={(e)=>{handleTitleButtonClick(e, post.id)}}><EllipsisText text={post.title} maxLength={16}/></a>
                            </td>
                            <td className="post border-bottom-0">
                                테스트유저임
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <i className="bi bi-chat-fill pe-1"></i>({post.commentCount}) <i className="bi bi-hand-thumbs-up-fill"></i>({post.likeCount}) <i className="bi bi-eye-fill"></i>({post.viewCount})
                            </td>
                            <td className="text-center">
                                <DisplayCreatedAt createdAt={post.createdAt} />
                            </td>
                        </tr>
                    </React.Fragment>
                ))}

                </tbody>
            </table>
    );
}

export default Board;