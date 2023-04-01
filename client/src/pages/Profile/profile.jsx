import styles from '../../assets/styles/profile.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo';
import useFetch from '../../features/axios/usefetch';
import yt from '../../assets/images/yt.png';
import userlarge from '../../assets/images/User-large.png'
import Card from '../../components/card';
import Navbar from '../../components/Navbar/Navbar';

const Profile = () => {

    console.log(localStorage.getItem('user'));
    const User = JSON.parse(localStorage.getItem('user'));
    console.log(User);

    let url = `/${User.id}`;

    const { data } = useFetch(url);



    return (<>
     <div className={styles.Userprofile_page}>
                <Navbar/>
                <div className={styles.User_profile}>
                    <div className={styles.User_profile_img}>
                        <img src={userlarge} alt="" />
                    </div>
                    <div className={styles.User_profile_details}>
                        <div className={styles.User_profile_details_Profile}>
                            {' '}
                            Profile
                        </div>
                        <div className={styles.User_profile_details_Name}>
                            <div>{User.name}</div>
                        </div>
                        <div className={styles.User_profile_details_email}>
                            {' '}
                            <div>{User.email}</div>
                        </div>
                        <div className={styles.User_profile_details_upload}>
                            <div className={styles.User_profile_details_upload_video}>
                                {' '}
                                <Link to="/upload">Upload a video </Link>
                            </div>
                            <div className={styles.User_profile_details_upload_youtube}>
                                {' '}
                                <Link to="/upload/yt">
                                    Upload using <img src={yt} alt="" /> video
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Music_player}>
                    <div className={styles.Musicplayer_Heading}>Your Audio</div>
                    <div>
                         <div className={styles.Grid}>
                             <Card data={data} /> 
                         </div> 
                    </div>
                </div>
            </div>    
    </>);
}
 
export default Profile;

