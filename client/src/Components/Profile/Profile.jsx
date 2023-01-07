import './Profile.css';
import logo from './logo1.png';
import yt from './yt.png';
import userlarge from './User-large.png';
import userlogo from './User-logo.png';
import playerlogo from './Player-logo.png';
const Profile = () => {
    return (
        <div className="Userprofile-page">
            <div className="Navbar">
                <div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="Heading-top">Echo</div>
                </div>
                <div className="User-img">
                    <div>
                        <img src={userlogo} alt="" />
                    </div>
                    <div className="div">Logout</div>
                </div>
            </div>
            <div className="User-profile">
                <div className="User-profile-img">
                    <img src={userlarge} alt="" />
                </div>
                <div className="User-profile-details">
                    <div className="User-profile-details-Profile"> Profile</div>
                    <div className="User-profile-details-Name">
                        Paridhi Baruah
                    </div>
                    <div className="User-profile-details-email">
                        {' '}
                        geetmanik2@gmail.com
                    </div>
                    <div className="User-profile-details-upload">
                        <div className="User-profile-details-upload-video">
                            {' '}
                            Upload a video
                        </div>
                        <div className="User-profile-details-upload-youtube">
                            {' '}
                            Upload using <img src={yt} alt="" /> video
                        </div>
                    </div>
                </div>
            </div>
            <div className="Music-player">
                <div className="Musicplayer-Heading">Your Audio</div>
                <div className="Grid">
                    <div className="Music-song">
                        <div className="Music-card">
                            <img src={playerlogo} alt="" />
                        </div>
                        <div className="Music-card-details">
                            <div>Highway to Hell</div>
                            <div className="Music-card-details-timing">
                                <div>AC-DC</div>
                                <div>3:42</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
