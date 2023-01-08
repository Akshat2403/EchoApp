import Navbar from '../Upload/Navbar';
import Audiocollection from './Audio-Collection';
import Comment from './Comment';
import Audioplay from './Audioplay.jsx';
import { useParams } from 'react-router-dom';
import useFetch from '../usefetch';

const Audioplayer = () => {
    const { id } = useParams();
    const { data } = useFetch(`http://localhost:5000/audio/${id}`);
    // const info=JSON.stringify(data)
    // if (data) { console.log() }

    return (
        <>
            <div className="Audio-player">
                <Navbar />
                <Audioplay data={data} />
                <Audiocollection />
            </div>
        </>
    );
};
export default Audioplayer;
