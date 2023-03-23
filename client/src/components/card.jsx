import playerlogo from '../assets/images/Player-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../assets/styles/profile.module.css';

const Card = ({ data }) => {
    const navigate=useNavigate();
    const handleclick=(id)=>{
     navigate(`/audioplayer/${id}`)
    }
    return (
        <>
            <div className={styles.Music_card_grid}>
                {data &&
                    data.audio.map((audio) => (
                        <div
                            onClick={()=>handleclick(audio.id)}
                            className={styles.Music_song}
                            key={audio.id}
                        >
                            <div className={styles.Music_card}>
                                <img src={playerlogo} alt="" />
                            </div>
                            <div className={styles.Music_card_details}>
                                <div>{audio.title}</div>
                                <div className={styles.Music_card_details_timing}></div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};
export default Card;
