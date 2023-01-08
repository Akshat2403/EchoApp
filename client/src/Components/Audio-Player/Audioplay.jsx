import Audioimage from './Audio-image.png';
import './Audioplay.css';
import Audiocontroller from './AudioController';

const Audioplay = (data) => {
    const info = data.data;
    if (data.data) {
        console.log(info);
    }
    return (
        <>
            {info && (
                <div className="Audioplay-main">
                    <div className="Audioplay-image">
                        <img src={Audioimage} alt="" />
                    </div>
                    <div className="Audioplay-details">
                        <div className="Audioplay-details-playing">
                            Now Playing
                        </div>
                        <div className="Audioplay-details-audioname">
                            <div>{info.title}</div>
                            <div className="Audioplay-details-audiosinger">
                                {info.author.name}
                            </div>
                        </div>
                        <div className="Audioplay-controller">
                            <Audiocontroller data={info} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Audioplay;
