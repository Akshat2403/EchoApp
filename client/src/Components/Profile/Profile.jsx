import './Profile.css';
import UseridContext from '../userid';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import yt from './yt.png';
import userlarge from './User-large.png';

import Navbar from '../Upload/Navbar';
import Card from './Music-card';
import axios from 'axios';
const Profile = () => {
    const { userid } = useContext(UseridContext);

    const data = async () => {
        await axios.get('http://localhost:4000/userid').then((response) => {
            // console.log(response)
            return response.data;
        });
    };

    return (
        <div className="Userprofile-page">
            <Navbar />
            <div className="User-profile">
                <div className="User-profile-img">
                    <img src={userlarge} alt="" />
                </div>
                <div className="User-profile-details">
                    <div className="User-profile-details-Profile"> Profile</div>
                    <div className="User-profile-details-Name">
                        Paridhi Baruah
                    </div>
                    <div className="User-profile-details-Edit">Edit</div>
                    <div className="User-profile-details-email">
                        {' '}
                        {data.email}geetmanik2@gmail.com
                    </div>
                    <div className="User-profile-details-upload">
                        <div className="User-profile-details-upload-video">
                            {' '}
                            <Link to="/upload">Upload a video </Link>
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
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90vw',
                    }}
                >
                    <div className="Grid">
                        <Card data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
