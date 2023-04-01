import arrow from '../../assets/images/arrow.png';
import '../../assets/styles/Audio.css';
import React from 'react';
import '../../assets/styles/AddComment.css';
import useFetch from '../../features/usefetch';
import { useEffect } from 'react';
// import next from './next.png';
// import cross from './cross.png';
import { useState } from 'react';
import Commentcard from './Comment-card';
// import Commenticon from './Comment-logo.png';
import axios from 'axios';
const Comment = ({ audioid }) => {
    const User = JSON.parse(localStorage.getItem('user'));
    const [desc, setDesc] = useState('');
    const [time, setTime] = useState(0);
    const [arr, setArr] = useState('');
    const audio = document.getElementById('audio');
    const [data, setData] = useState('');
    const handleSubmit = async (e) => {
        try {
            const res = await axios.post(
                `/comment/${User.id}`,
                JSON.stringify({ desc: desc, timestamp: time })
            );
        } catch (err) {}
    };
    return (
        <div className="Comment-main">
            <div className="Comment-header">
                <div className="Comment-box">
                    <div className="Comment-heading">Comments</div>
                    <div className="Comment-count">1.2K</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        width: '10vw',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={arrow}></img>
                    </div>
                </div>
            </div>
            <div>
                <div
                    style={{
                        marginLeft: '2vw',
                        display: 'flex',
                        width: '78vw',
                        boxSizing: 'border-box',
                        alignItems: 'center',
                    }}
                >
                    <form
                        action=""
                        style={{
                            display: 'flex',
                            background:
                                'linear-gradient(116.79deg, rgba(77, 61, 85, 0.390134) 3.11%, rgba(142, 132, 147, 0.248102) 63.33%)',
                            backdropFilter: 'blur(30px)',
                            padding: '1vh 0vw',
                            borderRadius: '19px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <input
                            className="Comment-card"
                            style={{
                                outline: 'none',
                                color: '#e1c9ff',
                                width: '81vw',
                                borderRadius: '19px',
                                padding: '0vh 2vw',
                                height: '5vh',
                                width: '40vw',
                                boxSizing: 'border-box',
                                maxHeight: '40px',
                                minHeight: '30px',
                            }}
                            type="text"
                            name="comment"
                            valu={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Add a comment"
                        />
                        <div
                            style={{
                                dispaly: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40vw',
                            }}
                        >
                            <button
                                type="submit"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '19px',
                                    height: '5vh',
                                    width: '10vw',
                                    maxHeight: '40px',
                                    minHeight: '30px',
                                    border: '3px solid #A545C8',
                                }}
                            >
                                Comment
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <Commentcard audioid={audioid} />
                </div>
            </div>
        </div>
    );
};

export default Comment;
