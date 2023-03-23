import React, { useState, useRef, useEffect } from 'react';
import styles from '../../assets/styles/AudioPlayer.module.css';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

import Backwardbtn from '../../assets/images/Bkbutton.png';
import Forwardbtn from '../../assets/images/Forward.png';
const Audiocontroller = (data) => {
    const info = data.data;
    console.log(info);
    // if (info) { console.log(data.data.url) }

    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef(); // reference our audio component
    const progressBar = useRef(); // reference our progress bar
    const animationRef = useRef(); // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [
        audioPlayer?.current?.loadedmetadata,
        audioPlayer?.current?.readyState,
    ]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    };

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty(
            '--seek-before-width',
            `${(progressBar.current.value / duration) * 100}%`
        );
        setCurrentTime(progressBar.current.value);
    };

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 5);
        changeRange();
    };

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 5);
        changeRange();
    };
    // const audio=useFetch(`http://localhost:5000/audio/${}`)
    return (
        <>
            {info && (
                <div className={styles.audioPlayer}>
                    <audio
                        ref={audioPlayer}
                        src={`http://localhost:5000/audio/${info.url}.${info.format}`}
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
                            {isPlaying ? (
                                <FaPause />
                            ) : (
                                <FaPlay className={styles.play} />
                            )}
                        </button>
                        <button
                            className={styles.forwardBackward}
                            onClick={forwardThirty}
                        >
                            {' '}
                            <img src={Forwardbtn} alt="" />
                        </button>
                    </div>
                    {/* current time */}
                    <div className={styles.progressbuttonmain}>
                        <div className={styles.currentTime}>
                            {calculateTime(currentTime)}
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
                            {duration &&
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
