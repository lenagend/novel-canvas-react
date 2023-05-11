import axios from "axios";
import { API_BASE_URL } from "../../config/config";
import { useState, useEffect } from "react";

const useFetchPosts = (page, size, category, sortType, submittedSearchQuery) => {
    const [postsData, setPostsData] = useState([]);
    const [postCount, setPostCount] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/api/posts?page=${page - 1}&size=${size}&category=${category}&sortType=${sortType}&searchQuery=${submittedSearchQuery}`
                );
                setPostsData(response.data);
            } catch (error) {
                console.log("Error fetching posts: ", error);
            }
        };

        const fetchPostCount = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/api/posts/count?category=${category}&sortType=${sortType}&searchQuery=${submittedSearchQuery}`
                );
                setPostCount(response.data);
            } catch (error) {
                console.error("Error fetching post count:", error);
            }
        };

        fetchPosts();
        fetchPostCount();
    }, [page, size, category, sortType, submittedSearchQuery]);

    return [postsData, postCount];
};

export default useFetchPosts;
