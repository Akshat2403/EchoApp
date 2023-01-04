import Ffmpeg from 'fluent-ffmpeg';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

Ffmpeg.setFfmpegPath(__dirname + '/FFMPEG/ffmpeg.exe');

export const uploadConverter = async (videoSource, formatName, audioName) => {
    Ffmpeg(__dirname + '/../assets/video/' + videoSource)
        .toFormat(formatName)
        .saveToFile(`${__dirname}/../assets/audio/${audioName}.${formatName}`);
};
