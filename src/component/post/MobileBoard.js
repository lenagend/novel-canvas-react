import DisplayCreatedAt from "../../formats/DisplayCreatedAt";

const Board = ( {posts} ) => {
    return(
            <table className="table">
                <thead>
                <tr className="text-center">
                    <th scope="col" style={{ width: "25%" }}>
                    </th>
                    <th scope="col" style={{ width: "45%" }}>
                    </th>
                    <th scope="col" style={{ width: "30%" }}>
                        <i className="bi bi-clock"></i>
                    </th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <>
                        <tr key={post.id}>
                            <td rowSpan={2}>
                                <img style={{width: "60px", height: "90px"}} src="/assets/images/bg/01.jpg" />
                            </td>
                            <td colSpan={2} className="post border-bottom-0">
                                {post.title}
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
                    </>
                ))}
                </tbody>
            </table>
    );
}

export default Board;