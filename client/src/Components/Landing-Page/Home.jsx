import Card from '../Profile/Music-card';
import Navbar from '../Upload/Navbar';
import './Home.css';
const Home = () => {
    return (
        <>
            <div className="Home">
                <Navbar />

                <div className="Music-player">
                    <div className="Grid">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
