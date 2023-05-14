import {useEffect} from "react";
import {API_BASE_URL} from "../../config/config";
import axios from "axios";
import Cookies from 'js-cookie';

const useIncrementViewCount = (postId) => {
    useEffect(() => {
        const incrementViewCount = async () => {
            // 쿠키에서 조회수를 가져옵니다.
            const viewCount = Cookies.get(`viewCount-${postId}`);

            // 만약 쿠키가 없으면 (즉, 사용자가 이 게시물을 처음 본 경우), 조회수를 증가시키고 쿠키를 설정합니다.
            if (!viewCount) {
                try {
                    await axios.post(`${API_BASE_URL}/api/posts/${postId}/view`);
                    // 조회수를 증가시킨 후, 쿠키를 설정하여 사용자가 이 게시물을 이미 본 것을 표시합니다.
                    // 이 쿠키는 24시간 후에 만료됩니다.
                    Cookies.set(`viewCount-${postId}`, 'viewed', { expires: 1 });
                } catch (error) {
                    console.error("Error incrementing view count", error);
                }
            }
        };
        incrementViewCount();
    }, [postId]);
};


export default useIncrementViewCount;