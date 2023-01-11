import arrow from './arrow.png';
import './Audio.css';
import React from 'react';
import './AddComment.css';
import next from './next.png';
import cross from './cross.png';
import { useState } from 'react';
import Commentcard from './Comment-card';
import Commenticon from './Comment-logo.png';
import axios from 'axios';
const Comment = () => {
    const User = JSON.parse(sessionStorage.getItem('user'));
    const [desc, setDesc] = useState('');
    const handleSubmit = (e) => {
        axios.post(`localhost:5000/${User.id}`, JSON.stringify({ desc }), {
            headers: { 'Content-Type': 'application/json' },
        });
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
                    <form
                        action=""
                        style={{
                            display: 'flex',
                            background:
                                'linear-gradient(116.79deg, rgba(77, 61, 85, 0.390134) 3.11%, rgba(142, 132, 147, 0.248102) 63.33%)',
                            backdropFilter: 'blur(30px)',
                            padding: '1vh 2vw',
                            borderRadius: '19px',
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
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={arrow}></img>
                    </div>
                </div>
            </div>
            <div>
                <Commentcard />
                <Commentcard />
                <Commentcard />
                <Commentcard />
            </div>
        </div>
    );
};

export default Comment;
