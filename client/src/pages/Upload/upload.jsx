import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import playerlogo from '../../assets/images/Audio.svg';
import '../../assets/styles/Upload.css';
import Axios from '../../features/axios/axios';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Upload = () => {
    const User = JSON.parse(localStorage.getItem('user'));
    const [uploadVideo, setUploadVideo] = useState();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    // const [tag, setTag] = useState([]);
    const [format, setFormat] = useState('');
    const [ispending, setIspending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIspending(true);
        var formData = new FormData();
        formData.append('uploadVideo', uploadVideo);
        formData.append('title', title);
        formData.append('description', desc);
        // formData.append('tag', tag);
        formData.append('format', format);

        try {
            await axios
                .post(`/audio/${User.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                })
                .then((data) => {
                    if (data) {
                        navigate('/profile');
                    }
                });
        } catch (err) {}
    };
    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="Upload-item">
                    <div className="Upload-item-details">
                        <div className="title">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                value={title}
                                required
                            />
                        </div>
                        <div className="Description">
                            <label htmlFor="Description">Description</label>
                            <textarea
                                name="Description"
                                rows="5"
                                onChange={(e) => {
                                    setDesc(e.target.value);
                                }}
                                value={desc}
                            ></textarea>
                        </div>
                        {/* <div className="Tags">
                            <label htmlFor="Tags">Tags</label>
                            <textarea
                                name="Tags"
                                rows="2"
                                onChange={(e) => {
                                    setTag(e.target.value.split(','));
                                }}
                                value={tag}
                            ></textarea>
                        </div> */}
                        <div className="Audioformat">
                            <label htmlFor="Audio format">Audio format</label>
                            <select
                                required
                                onChange={(e) => {
                                    setFormat(e.target.value);
                                }}
                            >
                                <option disabled selected value="">
                                    Choose Audio format
                                </option>
                                <option value="mp3">mp3</option>
                                <option value="wav">wav</option>
                                {/* <option value="flac">flac</option> */}
                                {/* <option value="aiff">aiff</option> */}
                                <option value="ogg">ogg</option>
                                {/* <option value="asf">asf</option> */}
                            </select>
                        </div>
                    </div>

                    <div className="Upload-item-link">
                        <div className="Music-card">
                            <img src={playerlogo} alt="" />
                        </div>
                        <div className="link">
                            <input
                                type={'file'}
                                className="Upload-Input"
                                onChange={(e) => {
                                    setUploadVideo(e.target.files[0]);
                                }}
                                name="uploadVideo"
                                id="uploadVideo"
                                accept="video/mp4,video/x-m4v,video/*"
                                hidden
                                required
                            />
                            <label htmlFor="uploadVideo">
                                {uploadVideo ? (
                                    <span>Uploaded</span>
                                ) : (
                                    <span>Upload &nbsp;</span>
                                )}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="submit-button">
                    <button>Submit</button>{' '}
                </div>
            </form>
        </>
    );
};

export default Upload;
