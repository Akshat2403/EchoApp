import arrow from './arrow.png';
import './Audio.css';

import Commentcard from './Comment-card';
import Commenticon from './Comment-logo.png';
const Comment = () => {
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
                    <div>
                        <img src={Commenticon} alt="" />
                    </div>
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
