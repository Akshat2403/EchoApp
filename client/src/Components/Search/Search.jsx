import './Search.css';
import userlogo from './User-logo.png';
import searchlogo from './search.png';
import logo from './logo1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../usefetch';
// import Card from '../Profile/Music-card';
import Card1 from '../Profile/card2';
const Search = () => {
    const [newdata, setNewdata] = useState(null);

    const { data } = useFetch('http://localhost:5000/audio');
    // if(data){console.log(data)}

    const [search, setSearch] = useState('');

    const handleSubmit = () => {
        if (data) {
            const filtereddata = data.filter((audio) => {
                return audio.title.toLowerCase().includes(search.toLowerCase());
            });
            setNewdata(filtereddata);
        }
        console.log(newdata);
        //       <div className="Grid">
        //       <Card1 data={filtereddata}  />
        //   </div>
    };

    // if (data){const data1 = data.filter(
    // data => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    // );  console.log(data1)}
    //  console.log(data1)
    //     setNewdata(data1);}

    // console.log(search)
    // console.log(newdata)
    // console.log(data)
    //     if (data){
    //   let data1 = [];
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
    //         data1.push(data[i]);
    //     }
    // }
    // // setNewdata(data1);
    // console.log(data1)}

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
                    <form action="" onChange={() => handleSubmit()}>
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
                    {newdata && <Card1 data={newdata} />}
                </div>
            </div>
        </>
    );
};
export default Search;
