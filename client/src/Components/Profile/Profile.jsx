import './Profile.css';

import yt from './yt.png';
import userlarge from './User-large.png';

import Navbar from '../Upload/Navbar';
import Card from './Music-card';
const Profile = () => {
    return (
        <div className="Userprofile-page">
            <Navbar />
            <div className="User-profile">
                <div className="User-profile-img">
                    <img src={userlarge} alt="" />
                </div>
                <div className="User-profile-details">
                    <div className="User-profile-details-Profile"> Profile</div>
                    <div className="User-profile-details-box">
                        <div className="User-profile-details-Name">
                            Paridhi Baruah
                        </div>
                        <div className="User-profile-details-Edit">Edit</div>
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
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Profile;
