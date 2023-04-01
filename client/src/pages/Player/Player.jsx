import Navbar from '../../components/Navbar/Navbar';
import Audiocollection from '../../components/Comment/Audio-Collection';
import Comment from '../../components/Comment/Comment';
import Audioplay from '../../components/Comment/Audioplay';
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
