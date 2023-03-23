import Navbar from '../../components/Navbar/Navbar';
import Audiocollection from '../../components/Comment/Audio-Collection';
import Comment from '../../components/Comment/Comment';
import Audioplay from '../../components/Comment/Audioplay';
import { useParams } from 'react-router-dom';
import useFetch from '../../features/usefetch';
const Player = () => {
    const { id } = useParams();
    const { data } = useFetch(`/audio/${id}`);
    return (
        <>
            <Navbar />
            <Audioplay data={data} />
            <Comment />
            <Audiocollection />
        </>
    );
};
export default Player;
