import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {API_BASE_URL} from "../../config/config";
import AuthContext from "../../security/AuthContext";

const LikeButton = ({ id, isPost, likeCount }) => {
    const [liked, setLiked] = useState(false);
    const [localLikeCount, setLocalLikeCount] = useState(likeCount);
    const { isAuthenticated, token } = useContext(AuthContext); // Add token here
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            fetchIsLiked();
        }
    }, [id, isPost, token]);

    const fetchIsLiked = () => {
        if(token){
            axios.get(`${API_BASE_URL}/api/${isPost ? 'posts' : 'comments'}/${id}/liked`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                setLiked(response.data);
            }).catch(error => {
                console.error('Error while checking liked status:', error);
            });
        }
    }

    const fetchLikeCount = () =>
    {
        axios
            .get(`${API_BASE_URL}/api/${isPost ? 'posts' : 'comments'}/${id}/likeCount`)
            .then((response) => {
                setLocalLikeCount(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching like count:', error);
            });
    }

    const toggleLike = async () => {
        if (!isAuthenticated || !token) {
            navigate('/login', { state: { originPath: window.location.pathname } });
            return;
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const url = isPost ? `${API_BASE_URL}/api/posts/${id}/like` : `${API_BASE_URL}/api/comments/${id}/like`;
            await axios.put(url, {}, config);
            fetchIsLiked();
            fetchLikeCount();

        } catch (error) {
            console.error(error);
            if(error.response && error.response.status === 403){
                navigate('/login', { state: { originPath: window.location.pathname } });
            }
        }
    };

    return (
        <a
            href="#!"
            className={`nav-link ${liked ? 'active' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleLike();
            }}
        >
            <i className="bi bi-hand-thumbs-up-fill pe-1"></i>
            좋아요 (<span>{localLikeCount}</span>)
        </a>
    );
};


export default LikeButton;
