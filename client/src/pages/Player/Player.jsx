import Navbar from '../../components/Navbar/Navbar';
import Audiocollection from '../../components/Player/AudioCollection';
import Comment from '../../components/Player/Comment';
import Audioplay from '../../components/Player/AudioPlay';
const Player = () => {
    return (
        <>
            <Navbar />
            <Audioplay />
            <Comment />
            <Audiocollection />
        </>
    );
};
export default Player;
