import axios from "axios";
import {useEffect, useState} from "react";
import {API_BASE_URL} from "../../config/config";


const useFetchPost = (postId) => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/api/posts/${postId}`
                );
                setPost(response.data);

                setError(null);
            } catch (error) {
                setError(error);
            }
        };

        fetchPost();

    }, [postId]);

    return [post, error];
};

export default useFetchPost;