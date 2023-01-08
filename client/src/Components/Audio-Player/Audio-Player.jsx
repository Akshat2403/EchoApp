import Navbar from '../Upload/Navbar';
import Audiocollection from './Audio-Collection';
import Comment from './Comment';
import Audioplay from './Audioplay.jsx';

const Audioplayer = () => {
    return (
        <>
            <div className="Audio-player">
                <Navbar />
                <Audioplay />

                <Comment />
                <Audiocollection />
            </div>
        </>
    );
};
export default Audioplayer;
