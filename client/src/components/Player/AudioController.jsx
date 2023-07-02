import React, { useState, useRef, useEffect } from 'react';
import styles from '../../assets/styles/AudioPlayer.module.css';
import pause from '../../assets/images/pause.svg';
import play from '../../assets/images/play.svg';
import Backwardbtn from '../../assets/images/backward.svg';
import Forwardbtn from '../../assets/images/forward.svg';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlaying, toggletime } from '../../features/store/playerReducer';
import { toast } from 'react-toastify';
const Audiocontroller = ({ data, audioRef, progressBar }) => {
    const dispatch = useDispatch();
    const { playing, time } = useSelector((state) => state.Player);
    const [duration, setDuration] = useState(0);
    const animationRef = useRef(); // reference the animation

    useEffect(() => {
        console.log(audioRef.current.duration);
        const seconds = Math.floor(audioRef.current.duration);
        if (!isNaN(seconds)) {
            setDuration(seconds);
            progressBar.current.max = seconds;
        }
    }, [audioRef?.current?.duration, audioRef?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    const togglePlayPause = () => {
        console.log(playing);
        const prevValue = playing;
        dispatch(togglePlaying());
        if (!prevValue) {
            audioRef.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioRef.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    };

    const whilePlaying = () => {
        progressBar.current.value = audioRef.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const changeRange = () => {
        audioRef.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    };

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty(
            '--seek-before-width',
            `${(progressBar.current.value / duration) * 100}%`
        );
        dispatch(toggletime(progressBar.current.value));
    };

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 5);
        changeRange();
    };

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 5);
        changeRange();
    };
    return (
        <>
            {data && (
                <div className={styles.audioPlayer}>
                    <audio
                        ref={audioRef}
                        src={`http://localhost:5000/audio/${data.url}.${data.format}`}
                        preload="metadata"
                    ></audio>
                    <div className={styles.audiobutton}>
                        <button
                            className={styles.forwardBackward}
                            onClick={backThirty}
                        >
                            <img src={Backwardbtn} alt="" />
                        </button>
                        <button
                            onClick={togglePlayPause}
                            className={styles.playPause}
                        >
                            {playing ? (
                                <img src={pause} alt="" />
                            ) : (
                                <img src={play} alt="" />
                            )}
                        </button>
                        <button
                            className={styles.forwardBackward}
                            onClick={forwardThirty}
                        >
                            <img src={Forwardbtn} alt="" />
                        </button>
                    </div>
                    {/* current time */}
                    <div className={styles.progressbuttonmain}>
                        <div className={styles.currentTime}>
                            {calculateTime(time)}
                        </div>

                        {/* progress bar */}
                        <div style={{ margin: '0.5vh 1vw 0.5vh 0.5vw' }}>
                            <input
                                type="range"
                                className={styles.progressBar}
                                defaultValue="0"
                                ref={progressBar}
                                onChange={changeRange}
                            />
                        </div>

                        {/* duration */}
                        <div className={styles.duration}>
                            {'0:00' &&
                                !isNaN(duration) &&
                                calculateTime(duration)}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Audiocontroller;
