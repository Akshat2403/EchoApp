import Navbar from '../../components/Navbar/Navbar';
import Audiocollection from '../../components/Player/AudioCollection';
import Comment from '../../components/Player/Comment';
import Audioplay from '../../components/Player/AudioPlay';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import store from '../../features/store/store';
const Player = () => {
    const audioRef = useRef();
    const progressBar = useRef();
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <Audioplay audioRef={audioRef} progressBar={progressBar} />
                <Comment audioRef={audioRef} progressBar={progressBar} />
                <Audiocollection />
            </Provider>
        </>
    );
};
export default Player;
