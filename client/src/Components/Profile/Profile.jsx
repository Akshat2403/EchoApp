import './Profile.css';
import { Link } from 'react-router-dom';
import yt from './yt.png';
import userlarge from './User-large.png';
import Navbar from '../Upload/Navbar';
import Card from './Music-card';

import useFetch from '../usefetch';
const Profile = () => {
    console.log(sessionStorage.getItem('user'));
    const User = JSON.parse(sessionStorage.getItem('user'));

    let url = `http://localhost:5000/${User.id}`;

    const { data } = useFetch(url);

    return (
        <>
            <div className="Userprofile-page">
                <Navbar />
                <div className="User-profile">
                    <div className="User-profile-img">
                        <img src={userlarge} alt="" />
                    </div>
                    <div className="User-profile-details">
                        <div className="User-profile-details-Profile">
                            {' '}
                            Profile
                        </div>
                        <div className="User-profile-details-Name">
                            {data && <div>{data.name}</div>}
                        </div>
                        <div className="User-profile-details-email">
                            {' '}
                            {data && <div>{data.email}</div>}
                        </div>
                        <div className="User-profile-details-upload">
                            <div className="User-profile-details-upload-video">
                                {' '}
                                <Link to="/upload">Upload a video </Link>
                            </div>
                            <div className="User-profile-details-upload-youtube">
                                {' '}
                                <Link to="/upload/yt">
                                    Upload using <img src={yt} alt="" /> video
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Music-player">
                    <div className="Musicplayer-Heading">Your Audio</div>
                    <div
                    // style={{
                    //     display: 'flex',
                    //     alignItems: 'center',
                    //     justifyContent: 'center',
                    //     width: '90vw',
                    // }
                    >
                        <div className="Grid">
                            <Card data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
