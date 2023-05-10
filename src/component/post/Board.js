import DisplayCreatedAt from "../../formats/DisplayCreatedAt";

const Board = ( {posts} ) => {
    return(
        <div className="card card-body">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col" style={{ width: "10%" }}>
                        <i className="bi bi-clock"></i>
                    </th>
                    <th scope="col" style={{ width: "5%" }}>
                        <i className="bi bi-hand-thumbs-up"></i>
                    </th>
                    <th scope="col" style={{ width: "55%" }}></th>
                    <th scope="col" style={{ width: "20%" }}>
                        <i className="bi bi-person"></i>
                    </th>
                    <th scope="col" style={{ width: "5%" }}>
                        <i className="bi bi-eye"></i>
                    </th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <tr className="post" key={post.id}>
                        <td>
                            <DisplayCreatedAt createdAt={post.createdAt} />
                        </td>
                        <td>
                            {post.likeCount}
                        </td>
                        <td>
                            {post.title} ({post.commentCount})
                        </td>
                        <td>
                            {post.username}
                        </td>
                        <td>
                            {post.viewCount}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Board;