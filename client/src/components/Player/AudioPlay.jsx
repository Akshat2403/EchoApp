import Audioimage from '../../assets/images/Player.svg';
import '../../assets/styles/Audioplay.css';
import Audiocontroller from './AudioController';
import styles from '../../assets/styles/comment.module.css';
import { useState } from 'react';
import down from '../../assets/images/down.svg';
import useFetch from '../../features/usefetch';
import { useParams } from 'react-router-dom';

const Audioplay = ({ audioRef, progressBar }) => {
    const [expandtranscript, setExpandtranscript] = useState(false);
    const { id } = useParams();
    const { data } = useFetch(`/audio/${id}`);
    return (
        <>
            {data && (
                <>
                    <div className="Audioplay-main">
                        <div className="Audioplay-image">
                            <img src={Audioimage} alt="" />
                        </div>
                        <div className="Audioplay-details">
                            <div className="Audioplay-details-playing">
                                Now Playing
                            </div>
                            <div className="Audioplay-details-audioname">
                                <div>{data?.title}</div>
                                <div className="Audioplay-details-audiosinger">
                                    {data?.author.name}
                                </div>
                            </div>
                            <div className="Audioplay-controller">
                                <Audiocontroller
                                    data={data}
                                    audioRef={audioRef}
                                    progressBar={progressBar}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.comment_section}>
                        <div className={styles.comment_box}>
                            <div className={styles.header}>
                                <div className={styles.header_left}>
                                    <div>Transcript</div>
                                </div>
                                <div>
                                    <img
                                        src={down}
                                        alt=""
                                        className={
                                            expandtranscript
                                                ? styles.uparrow
                                                : styles.downarrow
                                        }
                                        onClick={(e) => {
                                            setExpandtranscript(
                                                !expandtranscript
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className={
                                    expandtranscript
                                        ? styles.transcriptopen
                                        : styles.transcriptclose
                                }
                            >
                                {data.transcript
                                    ? data.transcript
                                    : 'No Transcript Available'}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default Audioplay;
