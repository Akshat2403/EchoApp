import { useState } from 'react';
import Navbar from './Navbar';
import playerlogo from './Player-logo.png';
import './Upload.css';
import axios from 'axios';

const UploadYt = () => {
    const User = JSON.parse(sessionStorage.getItem('user'));
    console.log(User.id);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState([]);
    const [format, setFormat] = useState('');
    const [URL, setURL] = useState('');
    const [ispending, setIspending] = useState(false);
    const handleSubmit = async (e) => {
        console.log('check');
        setIspending(true);
        e.preventDefault();
        try {
            await axios
                .post(
                    `http://localhost:5000/audio/${User.id}/youtube`,
                    JSON.stringify({
                        format,
                        youtubeURL: URL,
                        tag: tags,
                        description: desc,
                        title,
                    }),
                    {
                        headers: {
                            'Content-Type': 'application/json',
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
                            <div className="Yt-link">
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
                                    <option value="flac">flac</option>
                                    <option value="aiff">aiff</option>
                                    <option value="ogg">ogg</option>
                                    <option value="asf">asf</option>
                                </select>
                            </div>
                            <div className="title1">
                                <label htmlFor="youtubeURL">Youtube Link</label>
                                <input
                                    type="text"
                                    name="youtubeURL"
                                    onChange={(e) => {
                                        setURL(e.target.value);
                                    }}
                                    value={URL}
                                    required
                                />
                            </div>
                            <div className="submit-button">
                                <button type="submit">Submit</button>{' '}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UploadYt;
