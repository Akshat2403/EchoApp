import '../../assets/styles/Audio.css';
import userlogo from '../../assets/images/User-logo.png';
const Commentcard = () => {
    return (
        <div className="Comment-card">
            <img className="user-image" src={userlogo}></img>
            <div className="Comment-info">
                <div className="Comment-name">
                    <div className="Comment-user">Name</div>
                    <div className="Comment-dot">.</div>
                    <div className="Comment-time">1 min ago</div>
                </div>
                <div className="Comment-desc">
                    xcjhbjcbjkhcnk.dsnzklcnzcxkln kjxbcv kjbxdm,n
                    xc,mnkghxcjcjkcvnh
                </div>
            </div>
        </div>
    );
};

export default Commentcard;
