import Ffmpeg from 'fluent-ffmpeg';
import ytdl from 'ytdl-core';
import { fileURLToPath } from 'url';
import createError from './error.js';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
Ffmpeg.setFfmpegPath(__dirname + '/FFMPEG/ffmpeg.exe');

export const uploadConverter = async (videoSource, formatName, audioName) => {
    return new Promise((resolve, reject) => {
        Ffmpeg(__dirname + '/../assets/video/' + videoSource)
            .toFormat(formatName)
            .saveToFile(
                `${__dirname}/../assets/audio/${audioName}.${formatName}`
            )
            .on('end', () => {
                fs.unlink(
                    __dirname + '/../assets/video/' + videoSource,
                    (err) => {
                        if (err) console.log(err);
                    }
                );
                resolve('done');
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

export const youtubeConverter = async (
    youtubeURL,
    formatName,
    audioName,
    videoSource
) => {
    return new Promise((resolve, reject) => {
        ytdl(youtubeURL, { quality: 'highestaudio' })
            .on('error', (err) => {
                console.log('one');
                reject(Error('Invalid link'));
            })
            .pipe(
                fs
                    .createWriteStream(
                        __dirname + '/../assets/video/' + videoSource
                    )
                    .on('error', (err) => {
                        // throw err;
                    })
            )
            .on('finish', () => {
                Ffmpeg(__dirname + '/../assets/video/' + videoSource)
                    .toFormat(formatName)
                    .saveToFile(
                        `${__dirname}/../assets/audio/${audioName}.${formatName}`
                    )
                    .on('end', () => {
                        fs.unlink(
                            __dirname + '/../assets/video/' + videoSource,
                            (err) => {
                                // if (err) throw err;
                            }
                        );
                        resolve('done');
                    })
                    .on('error', (err) => {
                        // console.log(err);
                        // throw err;
                    });
            });
    }).catch((err) => {
        throw Error('Invalid link');
    });
};
