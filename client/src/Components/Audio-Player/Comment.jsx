import arrow from './arrow.png';
import './Audio.css';
import userlogo from '../Search/User-logo.png';
import Commentcard from './Comment-card';
const Comment = () => {
    return (
        <div className="Comment-main">
            <div className="Comment-header">
                <div className="Comment-box">
                    <div className="Comment-heading">Comments</div>
                    <div className="Comment-count">1.2K</div>
                </div>
                <div>
                    <img src={arrow}></img>
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
