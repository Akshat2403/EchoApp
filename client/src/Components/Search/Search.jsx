import './Search.css';
import userlogo from './User-logo.png';
import searchlogo from './search.png';
import logo from './logo1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../usefetch';
import Card from '../Profile/Music-card';
const Search = () => {
    const [newdata, setNewdata] = useState(null);

    const { data } = useFetch('http://localhost:5000/audio');

    const [search, setSearch] = useState('');

    const handleSubmit = () => {
        const data = data.filter(
            data.title.toLowerCase().indexOf(search.toLowerCase()) != -1
        );
        setNewdata(data);
    };

    return (
        <>
            <div className="Search-page">
                <div className="Navbar">
                    <div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div className="Heading-top">Echo</div>
                    </div>
                    <div className="User-img">
                        <img src={userlogo} alt="" />
                    </div>
                </div>
                <div className="Search-Logo-section">
                    <img src={logo} alt="" />
                </div>
                <div className="Search-bar">
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Type something... "
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                    <button className="Search-button">
                        <img src={searchlogo} alt="" />
                    </button>
                </div>
                <div className="Grid">
                    <Card data={newdata} />
                </div>
            </div>
        </>
    );
};
export default Search;
