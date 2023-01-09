import './AddComment.css';
import next from './next.png';
import cross from './cross.png';
import { useState } from 'react';

const AddComment = () => {
    const [desc, setDesc] = useState('');
    const handleSubmit = (e) => {
        axios.post(`localhost:5000/${User.id}`, JSON.stringify({ desc }), {
            headers: { 'Content-Type': 'application/json' },
        });
    };
    return (
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
                onClick={handleClick}
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
    );
};

export default AddComment;
