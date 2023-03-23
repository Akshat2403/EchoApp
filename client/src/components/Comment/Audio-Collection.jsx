import Timer from '../../assets/images/Timer.png';
import '../../assets/styles/Audio-collection.css';
import Audiofile from './Audio-file';
const Audiocollection = () => {
    return (
        <>
            <div className="Audios">
                <table>
                    <tr className="Audio-table-heading">
                        <th className="Audio-column1-width">#</th>
                        <th className="Audio-column2-width">TITLE</th>
                        <th className="Audio-column3-width">ARTIST</th>
                        <th className="Audio-column4-width">DATE ADDED</th>
                        <th className="Audio-column5-width">
                            <img src={Timer} alt="" />
                        </th>
                    </tr>

                    <Audiofile />
                </table>
            </div>
        </>
    );
};
export default Audiocollection;
