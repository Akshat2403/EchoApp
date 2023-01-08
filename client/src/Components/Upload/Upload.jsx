import { useState } from 'react';
import Navbar from './Navbar';
import playerlogo from './Player-logo.png';
import './Upload.css';
import axios from 'axios';

const Upload = () => {
    const [uploadVideo, setUploadVideo] = useState();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);
    const [format, setFormat] = useState('');
    const [ispending, setIspending] = useState(false);
    const handleSubmit = async (e) => {
        console.log('check');
        setIspending(true);
        e.preventDefault();
        var formData = new FormData();
        formData.append('uploadVideo', uploadVideo);
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('tags', tags);
        formData.append('format', format);
        try {
            await axios
                .post(
                    `http://localhost:5000/audio/8e14abaa-1cd6-489f-a86e-0d0e22bb5f4e`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        withCredentials: 'include',
                    }
                )
                .then((data) => {
                    console.log(data);
                });
        } catch (err) {}
    };
    return (
        <>
            <div className="Upload-page">
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
                            <div className="Tags">
                                <label htmlFor="Tags">Tags</label>
                                <textarea
                                    name="Tags"
                                    rows="2"
                                    onChange={(e) => {
                                        setTags(e.target.value.split(','));
                                    }}
                                    value={tags}
                                ></textarea>
                            </div>
                            <div className="Audioformat">
                                <label htmlFor="Audio format">
                                    Audio format
                                </label>
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
                                    <option value="aac">aac</option>
                                </select>
                            </div>
                            <button type="submit">Submit</button>
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
                                />
                                <label htmlFor="uploadVideo">
                                    {uploadVideo ? (
                                        <span>Uploaded</span>
                                    ) : (
                                        <span>Upload &nbsp; &#8682;</span>
                                    )}
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Upload;
