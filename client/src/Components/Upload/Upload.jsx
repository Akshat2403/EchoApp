import logo from './logo1.png';
import userlogo from './User-logo.png';
import playerlogo from './Player-logo.png';
import './Upload.css';
const Upload = () => {
    return (
        <>
            <div className="Upload-page">
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
                <div className="Upload-item">
                    <div className="Upload-item-details">
                        <div className="title">
                            <label for="title">Title</label>
                            <input type="text" name="title" />
                        </div>
                        <div className="Description">
                            <label for="Description">Description</label>
                            <textarea name="Description" rows="5"></textarea>
                        </div>
                        <div className="Tags">
                            <label for="Tags">Tags</label>
                            <textarea name="Tags" rows="2"></textarea>
                        </div>
                        <div className="Audioformat">
                            <label for="Audio format">Audio format</label>
                            <input type="text" name="Audio format" />
                        </div>
                    </div>

                    <div className="Upload-item-link">
                        <div className="Music-card">
                            <img src={playerlogo} alt="" />
                        </div>
                        <div className="link"> Upload &nbsp; &#8682;</div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Upload;
