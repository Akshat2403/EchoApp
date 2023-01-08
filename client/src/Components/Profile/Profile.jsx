import './Profile.css';
import UseridContext from '../userid';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import yt from './yt.png';
import userlarge from './User-large.png';

import Navbar from '../Upload/Navbar';
import Card from './Music-card';
import axios from 'axios';
import useFetch from '../usefetch';
const Profile = () => {
    console.log(localStorage.getItem('user'));
    const User = JSON.parse(localStorage.getItem('user'));
    // console.log(User.id)
    // let [data,setData]=useState(null)

    // useEffect(() => {const Userdata = async () => {
    //     const response =await axios.get(`http://localhost:5000/${User.id}`)
    //     // .then((response) => {
    //     //     // console.log(response.data.email)
    //     //     let data=response.data
    //     //     return data;
    //     // });
    //     setData(response.data)

    // }; }, []);
    let url = `http://localhost:5000/${User.id}`;

    const { data } = useFetch(url);

    if (data) {
        console.log(data);
    }

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
                            Upload using <img src={yt} alt="" /> video
                        </div>
                    </div>
                </div>
            </div>
            <div className="Music-player">
                <div className="Musicplayer-Heading">Your Audio</div>
                <div className="Grid">
                    <Card data={data} />
                </div>
            </div>
        </div>
    );
};

export default Profile;
