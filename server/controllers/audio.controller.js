import { PrismaClient } from '@prisma/client';
import { uploadConverter, youtubeConverter } from '../utils/converter.js';
import createError from '../utils/error.js';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const createAudio = async (req, audioName) => {
    const reqID = req.params.uid;
    const { tag, youtubeURL, ...details } = req.body;
    const audio = await prisma.audio.create({
        data: {
            author: {
                connect: {
                    id: reqID,
                },
            },
            url: audioName,
            ...details,
        },
    });
    if (tag) {
        await Promise.all(
            tag.map(
                async (ele) =>
                    await prisma.tag.upsert({
                        where: { name: ele },
                        update: {
                            audio: {
                                connect: { id: audio.id },
                            },
                        },
                        create: {
                            name: ele,
                            audio: {
                                connect: { id: audio.id },
                            },
                            createdBy: {
                                connect: { id: reqID },
                            },
                        },
                    })
            )
        );
    }
    return audio;
};
export const getAudioAll = async (req, res, next) => {
    try {
        const audio = await prisma.audio.findMany();
        res.status(200).json(audio);
    } catch (err) {
        next(err);
    }
};

export const getAudio = async (req, res, next) => {
    try {
        const reqID = req.params.id;
        const audio = await prisma.audio.findUnique({
            where: {
                id: reqID,
            },
            include: {
                comment: true,
                tags: true,
            },
        });
        if (!audio) {
            return next(createError(404, 'Media Not Found'));
        }
        return res.status(200).json(audio);
    } catch (err) {
        next(err);
    }
};

export const addAudio = async (req, res, next) => {
    try {
        const audioName = `${uuidv4()}`;
        await uploadConverter(req.file.filename, req.body.format, audioName);
        const audio = await createAudio(req, audioName);
        res.status(201).json(audio);
    } catch (err) {
        next(err);
    }
};

export const addAudioYT = async (req, res, next) => {
    try {
        const audioName = `${uuidv4()}`;
        const VideoSource = uuidv4();
        await youtubeConverter(
            req.body.youtubeURL,
            req.body.format,
            audioName,
            `${VideoSource}.mp4`
        );
        const audio = await createAudio(req, audioName);
        res.status(201).json(audio);
    } catch (err) {
        next(err);
    }
};
export const deleteAudio = async (req, res, next) => {
    const reqID = req.params.id;
    const audio = await prisma.audio.delete({
        where: {
            id: reqID,
        },
    });
    res.status(205).json(audio);
};
