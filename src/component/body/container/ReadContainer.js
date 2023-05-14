import {useParams} from "react-router-dom";
import useFetchPost from "../../post/useFetchPost";
import useIncrementViewCount from "../../post/useIncrementViewCount";
import Loading from "./Loading";

const ReadContainer = () => {
    const { postId } = useParams();
    useIncrementViewCount(postId);
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
                                <h1 className="card-title h4">{post.title}</h1>
                            </div>
                            <div className="card-body">
                                <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                            </div>
                            <div className="card-footer">
                              댓글이나 다른기능들
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ReadContainer;