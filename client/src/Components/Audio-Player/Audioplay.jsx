import Audioimage from './Audio-image.png';
import './Audioplay.css';
const Audioplay = () => {
    return (
        <>
            <div className="Audioplay-main">
                <div className="Audioplay-image">
                    <img src={Audioimage} alt="" />
                </div>
                <div className="Audioplay-details">
                    <div className="Audioplay-details-playing">Now Playing</div>
                    <div className="Audioplay-details-audioname">
                        <div>Highway to hell</div>
                        <div className="Audioplay-details-audiosinger">
                            AC-DC
                        </div>
                    </div>
                    <div className="Audioplay-controller"></div>
                </div>
            </div>
        </>
    );
};
export default Audioplay;
