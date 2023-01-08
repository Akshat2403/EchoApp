import playerlogo from './Player-logo.png';
import UseridContext from '../userid';

import './Profile.css';
const Card = ({ data }) => {
    // const{userid}=useContext(UseridContext);
    // const data=async ()=>{
    //     await axios.get(
    //         'http://localhost:4000/userid').then(response =>{
    //             // console.log(response)
    //             return response.data
    //         })
    // }

    return (
        <>
            <div className="Music-song">
                {/* {data.audio.map(audio=>(
                     <div key={audio.id}>
                        <div className="Music-card">
                            <img src={playerlogo} alt="" />
                        </div>
                        <div className="Music-card-details">
                            <div>Highway to Hell</div>
                            <div className="Music-card-details-timing">
                                <div>AC-DC</div>
                                <div>3:42</div>
                            </div>
                        </div>
                     </div>
                    

                ))} */}

                <div className="Music-card">
                    <img src={playerlogo} alt="" />
                </div>
                <div className="Music-card-details">
                    <div>Highway to Hell</div>
                    <div className="Music-card-details-timing">
                        <div>AC-DC</div>
                        <div>3:42</div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
