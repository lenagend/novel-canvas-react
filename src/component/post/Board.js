import DisplayCreatedAt from "../../formats/DisplayCreatedAt";
import React from "react";
import {Link} from "react-router-dom";

const Board = ( {posts} ) => {
    return(
            <table className="table">
                <thead>
                <tr className="text-center">
                    <th scope="col" style={{ width: "80px" }}>
                    </th>
                    <th scope="col" style={{ width: "auto" }}>
                    </th>
                    <th scope="col" style={{ width: "130px" }}>
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
                                <Link to={`/read/${post.id}`}>{post.title}</Link>
                            </td>
                            <td className="post border-bottom-0">
                                테스트유저임
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <i className="bi bi-chat-fill pe-1"></i> ({post.commentCount}) <i className="bi bi-hand-thumbs-up-fill"></i> ({post.likeCount}) <i className="bi bi-eye-fill"></i> ({post.viewCount})
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