import {useEffect} from "react";
import {API_BASE_URL} from "../../config/config";
import axios from "axios";
import Cookies from 'js-cookie';

const useIncrementViewCount = (postId) => {
    useEffect(() => {
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
        };

        incrementViewCount();
    }, [postId]);
};


export default useIncrementViewCount;