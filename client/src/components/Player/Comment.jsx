import userlogo from '../../assets/images/User.svg';
import down from '../../assets/images/down.svg';
import styles from '../../assets/styles/comment.module.css';
import useFetch from '../../features/usefetch';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlaying, toggletime } from '../../features/store/playerReducer';
const Comment = ({ audioRef, progressBar }) => {
    const dispatch = useDispatch();
    const User = JSON.parse(localStorage.getItem('user'));
    const [comment, setComment] = useState('');
    const [timesec, setTimesec] = useState(null);
    const [timemin, setTimemin] = useState(null);
    const [expand, setExpand] = useState(false);
    const { id } = useParams();
    const { playing } = useSelector((state) => state.Player);
    const { data } = useFetch(`/comment/${id}/`);
    const handleChange = (e, timestamp) => {
        if (isFinite(timestamp)) {
            audioRef.current.currentTime = timestamp;
            progressBar.current.value = timestamp;
            progressBar.current.style.setProperty(
                '--seek-before-width',
                `${
                    (progressBar.current.value / audioRef.current.duration) *
                    100
                }%`
            );
            dispatch(toggletime(timestamp));
            if (!playing) {
                dispatch(togglePlaying());
            }
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!User) {
            toast('Please Sign up or Login to comment');
        }
        try {
            if (!User) {
                toast('You are not logged in');
                return;
            }
            if (audioRef) {
                if (
                    (timesec % 60) + 60 * timemin > audioRef.current.duration ||
                    timesec > 59 ||
                    timemin > 59
                ) {
                    toast('Invalid time');
                } else {
                    await axios.post(
                        `/comment/${id}/${User.id}`,
                        JSON.stringify({
                            desc: comment,
                            timestamp: [timemin, timesec],
                        }),
                        {
                            headers: { 'Content-Type': 'application/json' },
                        }
                    );
                    window.location.reload();
                }
            }
        } catch (err) {
            // console.log(err);
            toast(err.response.data);
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
                            <div>
                                <img
                                    src={down}
                                    alt=""
                                    className={
                                        expand
                                            ? styles.uparrow
                                            : styles.downarrow
                                    }
                                    onClick={(e) => setExpand(!expand)}
                                />
                            </div>
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
                            <div
                                className={styles.inputbox}
                                style={{
                                    padding: 0,
                                    paddingLeft: '15px',
                                    width: '80px',
                                }}
                            >
                                <input
                                    type="text"
                                    className={styles.inputtime}
                                    value={timemin}
                                    pattern="\d{1,2}"
                                    placeholder="00"
                                    onChange={(e) => {
                                        setTimemin(e.target.value);
                                    }}
                                />
                                :
                                <input
                                    type="text"
                                    className={styles.inputtime}
                                    value={timesec}
                                    placeholder="00"
                                    pattern="\d{1,2}"
                                    max="59"
                                    onChange={(e) => {
                                        setTimesec(e.target.value);
                                    }}
                                />
                            </div>
                            <button type="submit" className={styles.button}>
                                Post
                            </button>
                        </form>
                        {data.comments.map((comment) => (
                            <div className={styles.comments} key={comment.id}>
                                <div className={styles.message}>
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

                                <div
                                    className={styles.comment_time}
                                    onClick={(e) =>
                                        handleChange(e, comment.timestamp)
                                    }
                                >
                                    {Math.floor(comment.timestamp / 60)}:
                                    {comment.timestamp % 60 < 10
                                        ? '0' + (comment.timestamp % 60)
                                        : comment.timestamp % 60}
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
