import userlogo from '../../assets/images/User.svg';
import styles from '../../assets/styles/comment.module.css';
import useFetch from '../../features/usefetch';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Comment = () => {
    const User = JSON.parse(localStorage.getItem('user'));
    const [comment, setComment] = useState('');
    const [time, setTime] = useState(0);
    const [arr, setArr] = useState('');
    const { id } = useParams();
    const audio = document.getElementById('audio');
    // const [data, setData] = useState('');
    const { data, isLoading, error } = useFetch(`/comment/${id}/`);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `/comment/${id}/${User.id}`,
                JSON.stringify({ desc: comment, timestamp: time }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            window.location.reload();
        } catch (err) {
            toast(err.response.data.message);
        }
    };
    return (
        <>
            {data && (
                <div className={styles.comment_section}>
                    <div className={styles.comment_box}>
                        <div className={styles.header}>
                            <div className={styles.header_left}>
                                <div>Comments</div>
                                <div>{data.comments.length}</div>
                            </div>
                            <div>L</div>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className={styles.inputbox}
                                placeholder="Add a comment..."
                                value={comment}
                                onChange={(e) => {
                                    setComment(e.target.value);
                                }}
                                required
                            />
                            <button type="submit" className={styles.button}>
                                Post
                            </button>
                        </form>
                        {data.comments.map((comment) => (
                            <div className={styles.comments} key={comment.id}>
                                <img src={userlogo} alt=""></img>
                                <div className={styles.comment_unique}>
                                    <div className={styles.author}>
                                        {comment.author.name}
                                    </div>
                                    <div className={styles.comment_desc}>
                                        {comment.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comment;
